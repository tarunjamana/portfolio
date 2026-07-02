"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

const STORAGE_KEY = "reduced-motion";

type ReducedMotionContextValue = {
  reducedMotion: boolean;
  osForced: boolean;
  toggle: () => void;
};

const ReducedMotionContext = createContext<ReducedMotionContextValue | null>(
  null,
);

export function ReducedMotionProvider({ children }: { children: ReactNode }) {
  const [osPref, setOsPref] = useState(false);
  const [userPref, setUserPref] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setOsPref(query.matches);
    const onChange = (e: MediaQueryListEvent) => setOsPref(e.matches);
    query.addEventListener("change", onChange);

    setUserPref(window.localStorage.getItem(STORAGE_KEY) === "true");

    return () => query.removeEventListener("change", onChange);
  }, []);

  const reducedMotion = osPref || userPref;

  useEffect(() => {
    document.documentElement.dataset.reducedMotion = String(reducedMotion);
  }, [reducedMotion]);

  const toggle = () => {
    if (osPref) return;
    setUserPref((prev) => {
      const next = !prev;
      window.localStorage.setItem(STORAGE_KEY, String(next));
      return next;
    });
  };

  return (
    <ReducedMotionContext.Provider
      value={{ reducedMotion, osForced: osPref, toggle }}
    >
      {children}
    </ReducedMotionContext.Provider>
  );
}

export function useReducedMotion() {
  const ctx = useContext(ReducedMotionContext);
  if (!ctx) {
    throw new Error(
      "useReducedMotion must be used within a ReducedMotionProvider",
    );
  }
  return ctx;
}
