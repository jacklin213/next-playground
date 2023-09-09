/** @type {import('next').NextConfig} */
const nextConfig = {
  // actions/configure-pages@v3 automatically injects 'basePath' and 'image.unoptimized' keys
  /**
   * Enable static exports for the App Router.
   *
   * @see https://nextjs.org/docs/pages/building-your-application/deploying/static-exports
   */
  output: "export"
};

module.exports = nextConfig;
