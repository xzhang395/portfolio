require 'closure-compiler' unless defined?(::Closure)

module MultiJs
  module Adapters
    class Closure
      ParseError = ::Closure::Error

      def self.compile(text, options={}) #:nodoc:
        options.delete(:output)
        compressor = ::Closure::Compiler.new options
        compressor.compile(text).chomp
      end
    end
  end
end
