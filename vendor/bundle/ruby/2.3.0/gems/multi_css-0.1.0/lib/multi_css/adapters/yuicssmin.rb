require 'yuicssmin' unless defined?(::Yuicssmin)

module MultiCss
  module Adapters
    class Yuicssmin
      ParseError = ::ExecJS::RuntimeError

      def self.min(text, options={}) #:nodoc:
        length = options[:length] || 5000
        ::Yuicssmin.compress(text, length)
      end
    end
  end
end
