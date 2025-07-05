import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gonpinodj.netlify.app'
  const currentDate = new Date().toISOString()

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="es" href="${baseUrl}/es" />
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/" />
  </url>
  <url>
    <loc>${baseUrl}/es</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="es" href="${baseUrl}/es" />
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/" />
  </url>
  <url>
    <loc>${baseUrl}/en</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="es" href="${baseUrl}/es" />
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/" />
  </url>
</urlset>`

  res.setHeader('Content-Type', 'text/xml')
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate')
  res.status(200).send(sitemap)
} 