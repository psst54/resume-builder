/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      };
    }

    config.module.rules.push({
      test: /\.(woff|woff2|ttf|eot)$/,
      use: {
        loader: "file-loader",
        options: {
          name: "static/fonts/[name].[hash].[ext]",
        },
      },
    });
    config.module.rules.push({
      test: /\.(woff|woff2|ttf|eot)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
          name: "static/fonts/[name].[hash].[ext]",
        },
      },
    });

    return config;
  },
};

module.exports = nextConfig;
