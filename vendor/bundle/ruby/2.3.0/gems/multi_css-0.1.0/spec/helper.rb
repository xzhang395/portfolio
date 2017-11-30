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

require 'multi_css'
require 'rspec'

class MockDecoder
  def self.min(string, options={})
    'a{color:red}'
  end
end
