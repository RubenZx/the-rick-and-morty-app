module.exports = [
  ['use-babel-config', '.babelrc'],
  ['use-eslint-config', '.eslintrc.js'],
  config => {
    config.module.rules.unshift({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    })
    return config
  },
]
