import type { MetadataRoute } from 'next';

import locales from '@/locales/vn.json';

const manifest = (): MetadataRoute.Manifest => ({
  name: locales.name,
  short_name: locales.name,
  description: locales.pages.hero.heading,
  start_url: '/',
  display: 'standalone',
  background_color: '#08BD80',
  theme_color: '#08BD80'
});

export default manifest;
