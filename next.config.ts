import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["ytdl-core", "fluent-ffmpeg"],
  experimental: {
    serverActions: {
      bodySizeLimit: "500mb",
    },
  },
};

export default nextConfig;
