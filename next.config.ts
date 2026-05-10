import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* 1. 删掉 output: 'export'，或者改为 undefined */
  
  /* 2. 这里的图片优化可以改回 false（或者直接删掉），让 CF 处理图片 */
  images: {
    unoptimized: false, 
  },

  /* 3. 保留这些防止构建中断的配置，对 CF 也有好处 */
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  /* 4. 如果之前加了 webpack 处理 .abc，建议保留，防止构建失败 */
  webpack: (config) => {
    config.module.rules.push({
      test: /\.abc$/,
      type: 'asset/source',
    });
    return config;
  },
};

export default nextConfig;