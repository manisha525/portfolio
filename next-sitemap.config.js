/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.manishashah7.com',       // ✅ Use your deployed domain
  generateRobotsTxt: true,                 // ✅ This generates robots.txt automatically
  generateIndexSitemap: false,             // optional if you only want a single sitemap
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/404'],                       // exclude non-indexable pages
};
