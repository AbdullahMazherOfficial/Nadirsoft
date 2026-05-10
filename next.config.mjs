/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  allowedDevOrigins: [
    'http://192.168.100.63:3000',
    'http://localhost:3000'
  ],
};

export default nextConfig;