import type { MetadataRoute } from 'next';

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: locales.domain,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1
  }
];

export default sitemap;
