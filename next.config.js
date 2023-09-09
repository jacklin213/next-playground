const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = undefined;

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

  assetPrefix = `/${repo}/`;
  console.log(`GitHub actions running. Setting assetPrefix to ${assetPrefix}`);
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  // actions/configure-pages@v3 automatically injects 'basePath' and 'image.unoptimized' keys
  /**
   * Ensure assets are correctly loaded from repository when in Github Pages
   */
  assetPrefix,
  /**
   * Enable static exports for the App Router.
   *
   * @see https://nextjs.org/docs/pages/building-your-application/deploying/static-exports
   */
  output: "export"
};

module.exports = nextConfig;
