def jruby?
  defined?(RUBY_ENGINE) && RUBY_ENGINE == 'jruby'
end

def macruby?
  defined?(RUBY_ENGINE) && RUBY_ENGINE == 'macruby'
end

unless ENV['CI'] || macruby?
  require 'simplecov'
  SimpleCov.start do
    add_filter 'spec'
  end
end

require 'multi_js'
require 'rspec'

class MockDecoder
  def self.compile(string, options={})
    'js code'
  end
end
