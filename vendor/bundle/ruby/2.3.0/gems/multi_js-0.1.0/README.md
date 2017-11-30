# MultiJs [![Build Status](https://secure.travis-ci.org/stereobooster/multi_js.png?branch=master)](https://secure.travis-ci.org/#!/stereobooster/multi_js) [![Dependency Status](https://gemnasium.com/stereobooster/multi_js.png?travis)](https://gemnasium.com/stereobooster/multi_js) [![Code Climate](https://codeclimate.com/badge.png)](https://codeclimate.com/github/stereobooster/multi_js)

There are lot of Ruby libraries to minify JS.
Instead of choosing a single implementation and forcing users of your library to be
stuck with it, you can use MultiJs instead, which will simply choose the
best available JS minifier. Here's how to use it:

```ruby
require 'multi_js'

MultiJs.compile('(function(){var long_name=1}())') #=> '(function(){var a=1}())'
```

The `use` method, which sets the MultiJs adapter, takes either a symbol or a
class (to allow for custom JS minifier) that responds to `.min` at the class level.

MultiJs tries to have intelligent defaulting. That is, if you have any of the
supported engines already loaded, it will utilize them before attempting to
load any. 
It will load libraries in following order:

 - [closure-compiler](https://github.com/documentcloud/closure-compiler)
 - [yui-compressor](https://github.com/sstephenson/ruby-yui-compressor)

If no other library is available, MultiJs falls back to [uglifier](https://github.com/lautis/uglifier).

## TODO

 - Implement report:publish rake task
 - Add desciption and some design to report. Put it all in separate folder
 - benchmark against most popular JS frameworks (speed, size)
 - generate benchmark report (html or md)
 - write test suite

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
