var process = require("../lib/process");
var assert = require("assert");

describe("process function", function () {

  it("should not does nothing when template is single quoted string", function () {
    var source = "template: '<div></div>'";
    var actual = process(source, null).source;
    assert.equal(actual, source);
  });

  it("should not does nothing when template is double quoted string", function () {
    var source = 'template: "<div></div>"';
    var actual = process(source, null).source;
    assert.equal(actual, source);
  });

  it("should not does nothing with tagged template function", function () {
    var source = 'template: myFn`<div></div>`';
    var actual = process(source, null).source;
    assert.equal(actual, source);
  });

  it("should pass through template when htmlmin config is null", function () {
    var source = 'template: ` \n'
               + '  <div>\n'
               + '  </div>\n'
               + '`';
    var actual = process(source, null).source;
    assert.equal(actual, source);
  });

  it("should pass through template when htmlmin config is an empty object", function () {
    var source = 'template: ` \n'
               + '  <div>\n'
               + '  </div>\n'
               + '`';
    var actual = process(source, {}).source;
    assert.equal(actual, source);
  });

  it("should process html template with specified htmlmin config", function () {
    var source = 'template: ` \n'
               + '  <div>\n'
               + '  </div>\n'
               + '`';
    var actual = process(source, {collapseWhitespace: true}).source;
    var expected = 'template: `<div></div>`';
    assert.equal(actual, expected);
  });

  it("should process multiple html templates with specified htmlmin config", function () {
    var source = 'template: ` \n'
               + '  <p>\n'
               + '   <span></span>\n'
               + '  </p>\n'
               + '`,\n'
               + 'template: ` \n'
               + '  <div>\n'
               + '  </div>\n'
               + '`,\n'
               + 'styleUrls: []'
    var actual = process(source, {collapseWhitespace: true}).source;
    var expected = 'template: `<p><span></span></p>`,\n'
                 + 'template: `<div></div>`,\n'
                 + 'styleUrls: []';
    assert.equal(actual, expected);
  });

  it("should preserve camelized attribute names", function () {
    var source = 'template: <div *ngIf="val"></div>';
    var actual = process(source, {collapseWhitespace: true}).source;
    assert.equal(actual, source);
  });

});
