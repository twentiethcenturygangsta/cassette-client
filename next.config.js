const prod = process.env.NODE_ENV === 'production';
const withPlugins = require('next-compose-plugins');
const CompressionPlugin = require('compression-webpack-plugin');
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
});

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  compress: true,
  webpack: (config) => {
    const plugins = [...config.plugins];
    return {
      ...config,
      mode: prod ? 'producton' : 'development',
      devtool: prod ? 'hidden-source-map' : 'eval',
      plugins,
    };
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  presets: ['next/babel'],
  productionBrowserSourceMaps: true,
  webpack: (config) => {
    config.plugins.push(new CompressionPlugin());
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
});

module.exports = withPlugins([[withBundleAnalyzer]], nextConfig);
