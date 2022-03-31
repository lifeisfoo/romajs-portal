/* eslint-disable no-undef */
/** @type {import('next-sitemap').IConfig} */
//https://www.npmjs.com/package/next-sitemap#configuration-options
module.exports = {
  siteUrl: process.env.SITE_URL || "https://example.com",
  generateRobotsTxt: true,
};
