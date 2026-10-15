import type { MetadataRoute } from 'next';
import { productRows, visibleCategories } from '@/lib/cms-server';

export const dynamic = 'force-dynamic';

const origin = 'https://mydemosite.work';
const pages = ['/', '/shop', '/contact', '/delivery', '/privacy', '/refund-policy'];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const urls = pages.map((path) => ({ url: origin + path }));

  try {
    const [products, categories] = await Promise.all([productRows(), visibleCategories()]);
    const published = products.filter((product: any) => product.sample !== 1);
    urls.push(...categories.map((category: any) => ({ url: origin + '/category/' + encodeURIComponent(category.slug || category.id) })));
    urls.push(...published.map((product: any) => ({ url: origin + '/product/' + encodeURIComponent(product.id) })));
  } catch (error) {
    console.error('Sitemap catalogue lookup failed', error instanceof Error ? error.message : error);
  }

  return urls;
}
