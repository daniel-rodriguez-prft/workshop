  /** @type {import('next').NextConfig} */
  const nextConfig = {
    images: {
      dangerouslyAllowSVG: true,
      remotePatterns: [
        {
          protocol: "https",
          hostname: "media.rawg.io",
          port: "",
          pathname: "/**"
        },
        {
          protocol: "https",
          hostname: "img.itch.zone",
          port: "",
          pathname: "/**"
        },
        {
          protocol: "https",
          hostname: "placehold.co",
          port: "",
          pathname: "/**"
        }
      ]
    }
  }

  module.exports = nextConfig
