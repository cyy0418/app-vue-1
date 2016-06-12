// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
var MONGODB_HOST = process.env.OPENSHIFT_MONGODB_DB_URL || "127.0.0.1";
var MONGODB_PORT = process.env.OPENSHIFT_MONGODB_DB_PORT || "27017";
var MONGODB_URL = "mongodb://admin:Whr6yV48t_7g@"+MONGODB_HOST+":"+MONGODB_PORT;
module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // gzip off by default as many popular static hosts such as
    // surge or netlify already gzip all static assets for you
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: require('./dev.env'),
    port: 9080,
    proxyTable: {}
  },
  db:{
    user:MONGODB_URL+"/user"
  }
}
