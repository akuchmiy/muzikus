/** @type {import('next').NextConfig} */
const path = require('path')

const { withEffectorReactAliases } = require('effector-next/tools')

const enhance = withEffectorReactAliases()

module.exports = enhance({
  reactStrictMode: true,
  eslint: {
    dirs: ['src'],
  },
  images: {
    domains: ['localhost'],
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
})
