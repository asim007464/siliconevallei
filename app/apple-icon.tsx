import { ImageResponse } from "next/og";
import { getInterWoff } from "@/lib/inter-font-og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";
export const runtime = "edge";

export default async function AppleIcon() {
  const [i300, i600, i700] = await Promise.all([
    getInterWoff("inter-latin-300-normal.woff"),
    getInterWoff("inter-latin-600-normal.woff"),
    getInterWoff("inter-latin-700-normal.woff"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "#0c0a09",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 36,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            color: "#fafaf9",
            fontSize: 56,
            lineHeight: 1,
          }}
        >
          <span style={{ fontWeight: 700, fontFamily: "Inter" }}>S</span>
          <span style={{ color: "#14b8a6", fontWeight: 600, fontFamily: "Inter" }}>
            /
          </span>
          <span style={{ fontWeight: 300, fontFamily: "Inter" }}>V</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: i300, style: "normal" as const, weight: 300 },
        { name: "Inter", data: i600, style: "normal" as const, weight: 600 },
        { name: "Inter", data: i700, style: "normal" as const, weight: 700 },
      ],
    }
  );
}
