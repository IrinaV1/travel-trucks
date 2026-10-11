import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
    images: {
	  remotePatterns: [
	      { protocol: 'https',
        hostname: "ac.goit.global",
        pathname: "/fullstack/career/campers/**", }
	    ]
	},
};

export default nextConfig;
