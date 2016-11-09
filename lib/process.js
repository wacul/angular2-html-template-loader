const minify = require("html-minifier").minify;

var templateUrlRegex = /template: *`((\n|[^`])+)`/g;
var stylesRegex = /styleUrls *:(\s*\[[^\]]*?\])/g;
var stringRegex = /(['"])((?:[^\\]\\\1|.)*?)\1/g;

module.exports = function process(source, htmlminConfig, sourcemap) {
  var newSource = source.replace(templateUrlRegex, function (match, htmlContent) {
    var processedContent = minify(htmlContent, htmlminConfig);
    return "template: `" + processedContent + "`";
  });

  return { source: newSource, sourcemap: sourcemap };
};
