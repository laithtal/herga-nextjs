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
  };
  