const webpack = require('webpack');
const withMDX = require("@next/mdx")()

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
    ],
  },
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  webpack: (config) => {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    config.module.rules.push({
      test: /\.m?js/,
      resolve: {
          fullySpecified: false
      }
  })
    config.resolve.fallback = {
      process: require.resolve('process/browser'),
      zlib: require.resolve('browserify-zlib'),
      stream: require.resolve('stream-browserify'),
      util: require.resolve('util'),
      buffer: require.resolve('buffer'),
      asset: require.resolve('assert'),
    }
    config.externals.push({ sharp: 'commonjs sharp', canvas: 'commonjs canvas' })
    config.plugins.push(
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
        // process: 'process/browser',
      })
    )
    return config
  }
}

module.exports = nextConfig
