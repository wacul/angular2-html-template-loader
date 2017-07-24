[![wercker status](https://app.wercker.com/status/884e0b28f553e5715d3b7d61282e271a/s/master "wercker status")](https://app.wercker.com/project/byKey/884e0b28f553e5715d3b7d61282e271a)
[![npm version](https://badge.fury.io/js/angular2-html-template-loader.svg)](https://badge.fury.io/js/angular2-html-template-loader)
# angular2-html-template-loader

A webpack loader which minify html template strings in your angular2 component code.

INPUT: 

```ts
@Component({
  selector: "my-component",
  template: `
    <div>
      Hello, world
    </div>
  `
})
export class MyComponent {
  //
}
```

OUTPUT: 

```ts
@Component({
  selector: "my-component",
  template: `<div>Hello, world</div>`
})
export class MyComponent {
  //
}
```

## Options

You can pass [html-minifier](https://github.com/kangax/html-minifier#options-quick-reference) options to this loader by writing them as a query string:

```js
module: {
  loaders: [
    {
      test: /\.component\.ts$/,
      exclude: /node_modules/,
      loader: "ts!angular2-html-template?collapseWhitespace=true"
    }
  ]
}
```

To preserve camel-cased attribute names(e.g. `*ngIf`), this loader turn the `caseSensitive` option `true` by the default.

## License
This software is released under the MIT License, see LICENSE.txt.

