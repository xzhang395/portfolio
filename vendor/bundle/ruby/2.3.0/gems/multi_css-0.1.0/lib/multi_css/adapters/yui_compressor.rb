require 'yui/compressor' unless defined?(::YUI::CssCompressor)

module MultiCss
  module Adapters
    class YuiCompressor
      def self.min(text, options={}) #:nodoc:
        compressor = ::YUI::CssCompressor.new options
        compressor.compress text
      end
    end
  end
end
