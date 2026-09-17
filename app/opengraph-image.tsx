import { ImageResponse } from "next/og";

export const alt =
  "Peinture Catalane — Peinture et rénovation à Perpignan";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
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
          background: "#0b0f10",
          color: "#f3f0e9",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: "6px",
            color: "#c9a66b",
            textTransform: "uppercase",
          }}
        >
          Peinture & rénovation
        </div>

        <div
          style={{
            marginTop: "35px",
            fontSize: 82,
            lineHeight: 1,
            letterSpacing: "-3px",
          }}
        >
          Peinture Catalane
        </div>

        <div
          style={{
            marginTop: "28px",
            fontSize: 34,
            color: "#b8b5ae",
          }}
        >
          Perpignan · Pyrénées-Orientales
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}