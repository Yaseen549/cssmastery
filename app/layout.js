import './globals.css';

// Canonical site URL: https://completecssmastery.vercel.app (or custom domain via NEXT_PUBLIC_SITE_URL)
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : null) ||
  'https://completecssmastery.vercel.app';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'CSSMaster — Complete CSS Learning Platform & Modern Reference',
  description:
    'Comprehensive, interactive CSS learning platform covering CSS from absolute beginner to advanced architecture, flexbox, grid, subgrid, container queries, and OKLCH.',
  keywords: [
    'CSS',
    'CSS3',
    'learn CSS',
    'CSS flexbox',
    'CSS grid',
    'modern CSS',
    'container queries',
    'cascade layers',
    'OKLCH',
    'web development',
    'interactive CSS playground',
  ],
  authors: [{ name: 'Yaseen' }],
  openGraph: {
    title: 'CSSMaster — Complete CSS Learning Platform & Modern Reference',
    description:
      'Master Cascading Style Sheets with interactive live playgrounds, structured lessons, and modern layout specifications.',
    url: siteUrl,
    siteName: 'CSSMaster',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CSSMaster Learning Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CSSMaster — Complete CSS Learning Platform',
    description:
      'Learn CSS the easy, visual way with 50 step-by-step lessons, live interactive playground, and modern visualizers.',
    images: ['/twitter-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
    shortcut: '/favicon.svg',
    apple: '/icon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-900 text-zinc-800 antialiased dark:text-zinc-100">
        {children}
      </body>
    </html>
  );
}
