require 'cssminify' unless defined?(::CSSminify)

module MultiCss
  module Adapters
    class Cssminify
      def self.min(text, options={}) #:nodoc:
        length = options[:length] || 5000
        ::CSSminify.compress(text, length)
      end
    end
  end
end
