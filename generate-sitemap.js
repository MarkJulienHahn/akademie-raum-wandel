const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

async function generateSiteMap() {
  const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/kalender', changefreq: 'daily', priority: 2.0 },
    { url: '/angebote', changefreq: 'daily', priority: 2.0 },
    { url: '/akademie', changefreq: 'daily', priority: 3.0 },
    { url: '/personen', changefreq: 'daily', priority: 3.0 },
    { url: '/kontakt', changefreq: 'daily', priority: 3.0 },
  ];

  const stream = new SitemapStream({ hostname: 'https://akademieraumwandel.com' });
  const xml = await streamToPromise(Readable.from(links).pipe(stream)).then((data) => data.toString());

  fs.writeFileSync('public/sitemap.xml', xml);
}

generateSiteMap();