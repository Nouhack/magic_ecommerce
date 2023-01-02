module.exports = {
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      use: 'frontmatter-markdown-loader',
      options: { mode: ['react-component'] }
    })
    return cfg
  }
}
