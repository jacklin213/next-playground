/** @type {import('next').NextConfig} */
const nextConfig = {
  // actions/configure-pages@v3 automatically injects 'basePath' and 'image.unoptimized' keys
  /**
   * Sets basePath to empty for development server. When published to GitHub will be updated to project slug
   */
  basePath: '',
  /**
   * Enable static exports for the App Router.
   *
   * @see https://nextjs.org/docs/pages/building-your-application/deploying/static-exports
   */
  output: "export",
  /**
   * Optimize Cloudscape imports. https://cloudscape.design/get-started/integration/using-cloudscape-components/#bundling-with-next.js-optional
   */
  transpilePackages: [
    '@cloudscape-design/components',
    '@cloudscape-design/component-toolkit'
  ]
};

module.exports = nextConfig;
