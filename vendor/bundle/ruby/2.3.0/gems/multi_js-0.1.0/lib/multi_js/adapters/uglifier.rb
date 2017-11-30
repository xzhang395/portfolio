require 'uglifier' unless defined?(::Uglifier)

module MultiJs
  module Adapters
    class Uglifier
      ParseError = ::Uglifier::Error

      def self.compile(text, options={}) #:nodoc:
        compressor = ::Uglifier.new options
        compressor.compile text
      end
    end
  end
end
