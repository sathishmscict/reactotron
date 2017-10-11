var path = require('path')
const metroBundler = require('metro-bundler')

var config = {
  getProjectRoots() {
    return [
      path.resolve(__dirname),
      path.resolve(__dirname, '../reactotron-react-native'),
      path.resolve(__dirname, '../reactotron-core-client'),
    ]
  },
  getBlacklistRE: function() {
    return metroBundler.createBlacklist([
      /reactotron-react-native[/\\]node_modules[/\\]react-native[/\\].*/,
    ])
  },
}
module.exports = config
