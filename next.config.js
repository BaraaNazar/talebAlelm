/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["kitabat.blog", "www.gph.gov.sa", "clcdn.spa.gov.sa", "www.wmn.gov.sa", "2.bp.blogspot.com", "alkafeel.net", "www.ahmadiyya-islam.org", "upload.wikimedia.org", "media.licdn.com"],
  },
  experimental: {
    appDir: true,
  },
  outDir: 'build',
}

module.exports = nextConfig;
