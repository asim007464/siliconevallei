import { ImageResponse } from "next/og";
import { getInterWoff } from "@/lib/inter-font-og";

export const alt = "Silicone Vallei | Kitspecialist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "edge";

export default async function OpenGraphImage() {
  const [i300, i400, i600, i700] = await Promise.all([
    getInterWoff("inter-latin-300-normal.woff"),
    getInterWoff("inter-latin-400-normal.woff"),
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
          background: "linear-gradient(160deg, #0c0a09 0%, #1c1917 55%, #0c0a09 100%)",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 72,
            maxWidth: 1040,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "center",
              flexWrap: "wrap",
              color: "#fafaf9",
              fontSize: 86,
              lineHeight: 1.1,
            }}
          >
            <span style={{ fontWeight: 700, fontFamily: "Inter" }}>Silicone</span>
            <span
              style={{
                color: "#14b8a6",
                margin: "0 10px",
                fontWeight: 600,
                fontFamily: "Inter",
              }}
            >
              /
            </span>
            <span style={{ fontWeight: 300, fontFamily: "Inter" }}>Vallei</span>
          </div>
          <p
            style={{
              marginTop: 28,
              fontSize: 32,
              fontWeight: 400,
              color: "#a8a29e",
              textAlign: "center",
              fontFamily: "Inter",
            }}
          >
            Professionele kit- en voegwerkzaamheden
          </p>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: i300, style: "normal" as const, weight: 300 },
        { name: "Inter", data: i400, style: "normal" as const, weight: 400 },
        { name: "Inter", data: i600, style: "normal" as const, weight: 600 },
        { name: "Inter", data: i700, style: "normal" as const, weight: 700 },
      ],
    }
  );
}
