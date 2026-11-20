export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://cssmastery.vercel.app/sitemap.xml',
  };
}
