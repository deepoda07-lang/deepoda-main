import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Old Turkish URL
    const turkishRedirects = [
      { source: "/hakkimizda", destination: "/tr/about" },
    ];

    // Old tool paths that now live on tools.deepoda.com
    const toolPaths = [
      "/pdf/merge", "/pdf/split", "/pdf/compress", "/pdf/crop", "/pdf/rotate",
      "/pdf/watermark", "/pdf/page-number", "/pdf/to-jpg", "/pdf/from-jpg",
      "/pdf/lock", "/pdf/unlock", "/pdf/sign", "/pdf/edit", "/pdf/to-word",
      "/pdf/form-fill", "/pdf/annotate",
      "/image/compress", "/image/convert", "/image/resize", "/image/crop",
      "/image/rotate", "/image/to-pdf", "/image/heic-to-jpg", "/image/watermark",
      "/image/add-text", "/image/remove-bg", "/image/color-palette", "/image/exif",
      "/image/ocr",
      "/convert/word-to-pdf", "/convert/excel-to-pdf", "/convert/html-to-pdf",
      "/convert/markdown-to-pdf", "/convert/base64", "/convert/qr-code",
      "/convert/json-format",
      "/video/compress", "/video/trim", "/video/to-mp3", "/video/convert",
      "/video/to-gif", "/video/merge", "/video/mute", "/video/rotate",
    ];

    const toolRedirects = toolPaths.map((path) => ({
      source: path,
      destination: `https://tools.deepoda.com/en${path}`,
    }));

    return [...turkishRedirects, ...toolRedirects].map((r) => ({
      ...r,
      permanent: true,
    }));
  },
};

export default nextConfig;
