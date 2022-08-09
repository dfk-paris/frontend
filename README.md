# DFK Frontend Library

* fonts licensing
* favicon
* icons

// remove pink background from dfk unpublished page
        const article = document.querySelector('article')
        if (article) {
          article.classList.remove('node--unpublished')
        }

TODO

## Usage

To make use of some of the widgets within this module, simply include the static
build in your drupal page with a script tag:

~~~html
<script
  type="text/javascript"
  src="https://static.dfkg.org/frontend/dist/index.js"
></script>
<script type="text/javascript">DfkFrontend.init()</script>
~~~

Then make use of the widgets, have a look at the
[src/riot.js](https://github.com/dfk-paris/frontend/blob/master/src/demo.riot)
file for examples. Keep in mind that you cannot use self-closing tags, so
instead of `<dfk-widget is="icon" />` you have to use
`<dfk-widget is="icon"></dfk-widget>`.

The module can also be imported and used in a module context like this

~~~javascript
import DfkFrontend from 'https://static.dfkg.org/frontend/dist/index.js'
DfkFrontend.init()
~~~

or from Github:

~~~javascript
// package.json
{
  ...
  devDependencies: {
    ...
    "@dfk-paris/frontend": "dfk-paris/frontend#master",
    ...
  }
  ...
}

// and then in your code
import DfkFrontend from '@dfk-paris/frontend'
DfkFrontend.init()
~~~

You may also import and use singular components with e.g.

~~~javascript
import * as riot from riot
import RangeControl from '@dfk-paris/frontend/src/range_control.riot'

riot.register('range-control', RangeControl)
riot.mount('range-control')
~~~

## Development

This module comes with a webpack setup, run it with

~~~bash
npm install
npm run dev
~~~

And navigate to https://localhost:4000 for the demo page
