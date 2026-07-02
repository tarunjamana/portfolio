import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#F8F5EF",
          color: "#2A2723",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 32,
            fontWeight: 600,
            marginBottom: 24,
          }}
        >
          Tarun<span style={{ color: "#1E5F57" }}>.</span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 600,
            lineHeight: 1.15,
            maxWidth: 920,
          }}
        >
          Web experiences that resonate.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#6B655C",
            marginTop: 24,
            maxWidth: 800,
          }}
        >
          Engineered to be fast, accessible, and measured.
        </div>
      </div>
    ),
    { ...size },
  );
}
