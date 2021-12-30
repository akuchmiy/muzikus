/** @type {import('next').NextConfig} */
const path = require('path')

module.exports = {
  reactStrictMode: true,
  eslint: {
    dirs: ['src'],
  },
  webpack: (config) => {
    config.resolve.alias = Object.assign({}, config.resolve.alias, {
      Constants: path.resolve(__dirname, 'src/constants'),
      Services: path.resolve(__dirname, 'src/services'),
      Models: path.resolve(__dirname, 'src/models'),
      Components: path.resolve(__dirname, 'src/components'),
      Hooks: path.resolve(__dirname, 'src/hooks'),
    })
    return config
  },
}
