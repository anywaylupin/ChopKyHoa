import type { MetadataRoute } from 'next';

import locales from '@/locales/vn.json';

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: locales.domain,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1
  }
];

export default sitemap;
