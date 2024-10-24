import type { MetadataRoute } from 'next';

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: 'https://chopkyhoa.vercel.app',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1
  }
];

export default sitemap;
