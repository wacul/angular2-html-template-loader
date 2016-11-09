const minify = require("html-minifier").minify;

var templateUrlRegex = /template: *`((\n|[^`])+)`/g;
var defaultHtmlminConfig = {
  caseSensitive: true   // Angular2 uses camelized attr such as *ngIf.
};

module.exports = function process(source, htmlminConfig, sourcemap) {
  var newSource = source.replace(templateUrlRegex, function (match, htmlContent) {
    var opt = Object.assign({}, defaultHtmlminConfig, htmlminConfig);
    var processedContent = minify(htmlContent, opt);
    return "template: `" + processedContent + "`";
  });

  return { source: newSource, sourcemap: sourcemap };
};
