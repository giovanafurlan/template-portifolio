const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const withPWA = require('next-pwa');

module.exports = withBundleAnalyzer({
  /* Caso tenha outros plugins envolva eles com o bundle */
  settings: {
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  }
});

module.exports = withPWA({
  pwa: {
    dest: 'public'
  }
});