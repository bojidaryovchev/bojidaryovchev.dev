import { siteConfig } from "@/site-config";
import { ImageResponse } from "next/og";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const OpengraphImage = () => {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "80px",
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 32,
          fontWeight: 600,
          color: "#60a5fa",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
        }}
      >
        {siteConfig.jobTitle}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 96,
          fontWeight: 800,
          marginTop: 16,
          lineHeight: 1.1,
        }}
      >
        {siteConfig.name}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 36,
          color: "#cbd5e1",
          marginTop: 32,
          maxWidth: 900,
        }}
      >
        Fullstack web development with AWS, Pulumi, PostgreSQL, React, Next.js &amp; Node.js
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 28,
          color: "#94a3b8",
          marginTop: "auto",
        }}
      >
        {siteConfig.url.replace("https://", "")}
      </div>
    </div>,
    { ...size },
  );
};

export default OpengraphImage;
