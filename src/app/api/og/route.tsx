import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? site.name;
  const kicker = searchParams.get("kicker") ?? site.descriptor;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#faf9f6",
          color: "#1a1a1a",
          padding: "72px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#b45309",
          }}
        >
          {kicker}
        </div>
        <div
          style={{
            fontSize: 68,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            fontWeight: 600,
            maxWidth: "90%",
          }}
        >
          {title}
        </div>
        <div style={{ fontSize: 24, color: "#6b6b68" }}>jonathanatiene.com</div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
