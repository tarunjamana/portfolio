import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F8F5EF",
          borderRadius: 6,
          fontSize: 20,
          fontWeight: 700,
          color: "#2A2723",
        }}
      >
        T<span style={{ color: "#1E5F57" }}>.</span>
      </div>
    ),
    { ...size },
  );
}
