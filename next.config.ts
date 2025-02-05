import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // Ensures correct Next.js serverless deployment
  outputFileTracingIncludes: {
    "*": ["node_modules/.prisma/**"], // Ensures Prisma files are included if used
  },
  images: {
    domains: [], // Add any external domains if needed
  },
};

export default nextConfig;