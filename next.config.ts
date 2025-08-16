import AutoImport from 'unplugin-auto-import/webpack';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.plugins.push(
      AutoImport({
        include: [/\.[tj]sx?$/],
        imports: ['react'],
        dirs: ['./components/**', './hooks/**', './lib/**'],
        dirsScanOptions: { types: false },
        dts: './types/auto-imports.d.ts',
        eslintrc: { enabled: true }
      })
    );

    return config;
  }
};

export default nextConfig;
