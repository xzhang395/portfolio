require 'css_press' unless defined?(::CssPress)

module MultiCss
  module Adapters
    class CssPress
      ParseError = ::Racc::ParseError

      def self.min(text, options={}) #:nodoc:
        ::CssPress.press(text, options)
      end
    end
  end
end
