# PMC's Webpack Config

This file should be familiar to you, as it was taken from the PMC-Core theme.

In this exercise, we'd like to walk through this config and identify what we learned previously in the workshop. Please ask questions as we go.

The goal of walking through this config is to show that despite it looking intimidating and complex, it's not much different from a simple config that we created during the workshop exercise.

## Going Forward

### Upgrade Webpack
PMC is not using Webpack 2.0 yet.  We recomend that you update going forward. Hopefully after this workshop, you should all feel confident about converting this config to 2.0.

### Modular code
From now on, break code out into modular components that include static assets like images, icons, fonts and css. By doing this you can utilize async loading plugins. You can also move all the bundle arrays out of the config and into an entry file.

### jQuery (Where is it coming from?)
Currently in the PMC-Core theme, jQuery is referenced in multiple ways. There is a global jQuery that comes from Wordpress. There is also an import of jQuery.  You can use Webpack to make sure that every reference `$`, `jQuery`, and `window.jquery` is referencing the same version.

You can do this with the Provide Plugin:
```
new webpack.ProvidePlugin({
  $: "jquery",
  jQuery: "jquery",
  "window.jQuery": "jquery"
})
```

And making sure jquery is added under externals:
```
  externals: {
    jquery: "jQuery",
    jQuery: "jQuery"
  },

```
How do you know if the provide plugin is working? You can see it in the compiled code!

```
/* WEBPACK VAR INJECTION */(function(jQuery) {const $ = jQuery;
$(() => console.log('ready'))

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))
```

and

```/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {var $ = __webpack_provided_window_dot_jQuery;
$(() => console.log('ready'))

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))```

