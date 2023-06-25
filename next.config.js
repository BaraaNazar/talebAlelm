/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'kitabat.blog',
      'www.ahmadiyya-islam.org',
      'clcdn.spa.gov.sa',
      'www.wmn.gov.sa',
      '2.bp.blogspot.com',
      'alkafeel.net',
      'upload.wikimedia.org',
      'media.licdn.com',
      'lh3.googleusercontent.com',
      'www.sifatusafwa.com',
      'www.noor-book.com',
      'cdn.shopify.com',
      'cdn.salla.sa',
      'www.risele.com.tr',
      'safinatulnajat.com',
      'www.neelwafurat.com',
      'www.daribnhazm.com',
    ],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
