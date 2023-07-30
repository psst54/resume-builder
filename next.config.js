/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack: (config, options) => {
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
    config.externals.push({
      sharp: "commonjs sharp",
      canvas: "commonjs canvas",
    });

    return config;
  },
};

module.exports = nextConfig;
