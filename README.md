# DFK Frontend Library

This is a library with frontend code facilitating current and future project
development. Specifically for the workflow to implement quasi web components
within the DFK Paris' Drupal CMS.

While this code is open source, it is likely not useful beyond the current
[DFK Paris website](https://dfk-paris.org).

Some licensed assets (fonts, images) are directly included from the DFK Paris
static hosts and are therefore not part of this repository.


## Usage

A demo page with available widgets is online at
https://static.dfkg.org/frontend/dist/index.html

To make use of some of the widgets, simply include the static
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

Many widgets require data input which you will have to pass with JavaScript or
HTML attributes. Therefore, the module can also be imported and used in a#
JavaScript module context like this

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

The Drupal system currently applies a pink shade to unpublished pages. This
can be a problem when previewing new production content. To suppress the
feature, include the following somewhere on the Drupal page:

~~~html
<script type="text/javascript">
  var article = document.querySelector('article')
  if (article) {
    article.classList.remove('node--unpublished')
  }
</script>
~~~


## Development

This module comes with a webpack setup, run it with

~~~bash
npm install
npm run dev
~~~

And navigate to https://localhost:4000 for the demo page
