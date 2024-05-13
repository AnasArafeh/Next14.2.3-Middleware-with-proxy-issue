/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/EPiServer/CMS/Content/:slug*",
          destination: "/api/cms-draft-mode",
        },
      ],
    };
  },
};

module.exports = nextConfig;
