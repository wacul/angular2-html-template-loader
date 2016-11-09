var assert = require("assert");
var loader = require("../index");

describe("loader", function () {
  it("should process html template", function () {
    var source = 'template: ` \n'
               + '  <div>\n'
               + '  </div>\n'
               + '`';
    var actual = loader(source);
    assert.equal(actual, source);
  });
});
