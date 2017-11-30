require 'rainpress' unless defined?(::Rainpress)

module MultiCss
  module Adapters
    class Rainpress
      def self.min(text, options={}) #:nodoc:
        ::Rainpress.compress text
      end
    end
  end
end
