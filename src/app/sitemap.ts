import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://mubareksd.dev',
      lastModified: new Date(),
    },
    {
      url: 'https://mubareksd.dev/en',
      lastModified: new Date(),
    },
    {
      url: 'https://mubareksd.dev/am',
      lastModified: new Date(),
    },
    {
      url: 'https://mubareksd.dev/ti',
      lastModified: new Date(),
    },
    {
      url: 'https://mubareksd.dev/ar',
      lastModified: new Date(),
    },
  ];
}
