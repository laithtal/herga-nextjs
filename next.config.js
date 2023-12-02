// next.config.js

module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://lmdev.wundeve.com/rest/content/currentsite/en-us/all/herga?format=json&coupleddata=true',
        },
      ];
    },
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
    typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true,
    },
  };
  