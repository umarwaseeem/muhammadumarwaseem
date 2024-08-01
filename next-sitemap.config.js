const fs = require('fs');
const root = "https://muhammadumarwaseem.com";

// Read mdx blog files
const files = fs.readdirSync('blogs');
const blogSlugs = files.map((file) => {
    return file.replace('.mdx', '');
});

module.exports = {
    siteUrl: root,
    generateRobotsTxt: true,
    sitemapSize: 20,
    changefreq: 'weekly',
    exclude: [
        "/now",
    ],
    generateIndexSitemap: false,
    additionalPaths: async (config) => [
        {
            loc: `${root}`,
            lastmod: new Date().toISOString(),
            changefreq: 'weekly',
            priority: 1,
        },
        {
            loc: `${root}/about/`,
            lastmod: new Date().toISOString(),
            changefreq: 'weekly',
            priority: 0.8,
        },
        {
            loc: `${root}/blogs/`,
            lastmod: new Date().toISOString(),
            changefreq: 'weekly',
            priority: 0.8,
        },
        {
            loc: `${root}/projects/`,
            lastmod: new Date().toISOString(),
            changefreq: 'weekly',
            priority: 0.8,
        },
        {
            loc: `${root}/contact/`,
            lastmod: new Date().toISOString(),
            changefreq: 'weekly',
            priority: 0.8,
        },
        ...blogSlugs.map((slug) => ({
            loc: `${root}/blogs/${slug}`,
            lastmod: new Date().toISOString(),
            changefreq: 'weekly',
            priority: 0.8,
        })),
    ],
};
