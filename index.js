var loaderUtils = require("loader-utils");
var process = require("./lib/process");

module.exports = function (source, sourcemap) {

  this.cacheable && this.cacheable();

  var globalOptions = this.options ? this.options.ng2htmlTemplate : {};
  var loaderOptions = loaderUtils.parseQuery(this.query);
  var opt = Object.assign({}, globalOptions, loaderOptions);

  var ret = process(source, opt, sourcemap);

  if (this.callback) {
    this.callback(null, ret.source, ret.sourcemap)
  } else {
    return ret.source;
  }

};
