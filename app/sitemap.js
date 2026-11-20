import { topics } from '../data/topics';

export default function sitemap() {
  const baseUrl = 'https://cssmastery.vercel.app';

  const staticRoutes = [
    '',
    '/topics',
    '/reference',
    '/visualizers',
    '/playground',
    '/about',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  const topicRoutes = topics.map((t) => ({
    url: `${baseUrl}/topics/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  return [...staticRoutes, ...topicRoutes];
}
