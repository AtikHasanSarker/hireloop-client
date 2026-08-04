
/** @type {import('next').Next} */
const nextConfig = {
  reactCompiler: true,
  
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
        search: "",
      },
      
    ],
  },
};

export default nextConfig;
