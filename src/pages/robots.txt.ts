import type { APIRoute } from 'astro';
export const GET: APIRoute = () =>
  new Response(
`User-agent: *
Allow: /
Sitemap: https://my-astro-site-dusky.vercel.app/sitemap-index.xml`,
    { headers: { 'Content-Type': 'text/plain' } }
  );
