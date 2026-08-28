import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

const Icon = () => {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
        color: "white",
        fontSize: 280,
        fontWeight: 800,
        fontFamily: "sans-serif",
        borderRadius: 96,
      }}
    >
      B
    </div>,
    { ...size },
  );
};

export default Icon;
