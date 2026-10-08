import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
    images: {
	  remotePatterns: [
	      { protocol: 'https', hostname: 'picsum.photos' }
	    ]
	},
};

export default nextConfig;
