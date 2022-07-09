const path = require("path");

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: { domains: ["books.google.com"] },
  async redirects() {
    return [
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/in/chewhx/",
        permanent: true,
      },
      {
        source: "/facebook",
        destination: "https://www.facebook.com/chew.h.xiang",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/chewhx",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
