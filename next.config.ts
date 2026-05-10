import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* 开启静态导出模式 */
  output: 'export', 
  
  /* 静态导出不支持图片优化功能，必须禁用 */
  images: {
    unoptimized: true, 
  },

  /* 注意：如果你的仓库名是 stone-web，
     你需要开启下面这行配置，否则 CSS 和图片会加载失败。
     如果仓库名已经改成了 stone2-china.github.io，则不需要这行。
  */
  // basePath: '/stone-web', 
};

export default nextConfig;