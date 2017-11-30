# MultiCss [![Build Status](https://secure.travis-ci.org/stereobooster/multi_css.png?branch=master)](https://secure.travis-ci.org/#!/stereobooster/multi_css) [![Dependency Status](https://gemnasium.com/stereobooster/multi_css.png?travis)](https://gemnasium.com/stereobooster/multi_css) [![Code Climate](https://codeclimate.com/badge.png)](https://codeclimate.com/github/stereobooster/multi_css)

There are lot of Ruby libraries to minify CSS.
Instead of choosing a single implementation and forcing users of your library to be
stuck with it, you can use MultiCss instead, which will simply choose the
best available CSS minifier. Here's how to use it:

```ruby
require 'multi_css'

MultiCss.min('a { color: red; }') #=> 'a{color:red}'
```

The `use` method, which sets the MultiCss adapter, takes either a symbol or a
class (to allow for custom CSS minifier) that responds to `.min` at the class level.

MultiCss tries to have intelligent defaulting. That is, if you have any of the
supported engines already loaded, it will utilize them before attempting to
load any. 
It will load libraries in following order:

 - [cssminify](https://github.com/matthiassiegel/cssminify)
 - [yuicssmin](https://github.com/matthiassiegel/yuicssmin)
 - [ruby-yui-compressor](https://github.com/sstephenson/ruby-yui-compressor). Doesn't test with travis-ci
 - [rainpress](https://github.com/sprsquish/rainpress)

If no other library is available, MultiCss falls back to [css_press](https://github.com/stereobooster/css_press).

## TODO

 - benchmark against most popular css frameworks (speed, size)
 - generate benchmark report (html or md)
 - write test suite
 - generate comparison table (html or md) with the help of test suite

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
