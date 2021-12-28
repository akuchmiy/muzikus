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
    })
    return config
  },
}
