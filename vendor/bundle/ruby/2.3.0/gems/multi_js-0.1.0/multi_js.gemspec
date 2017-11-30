# -*- encoding: utf-8 -*-
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'multi_js/version'

Gem::Specification.new do |gem|
  gem.name          = "multi_js"
  gem.version       = MultiJs::VERSION
  gem.authors       = ["sterebooster"]
  gem.email         = ["stereobooster@gmail.com"]
  gem.description   = %q{A generic swappable back-end for JS minifiers}
  gem.summary       = %q{A generic swappable back-end for JS minifiers}
  gem.homepage      = "https://github.com/stereobooster/multi_js"
  gem.license       = "MIT"

  gem.files         = `git ls-files`.split($/)
  gem.executables   = gem.files.grep(%r{^bin/}).map{ |f| File.basename(f) }
  gem.test_files    = gem.files.grep(%r{^(test|spec|features)/})
  gem.require_paths = ["lib"]

  gem.add_dependency 'uglifier', '~> 2'

  gem.add_development_dependency 'rake'
  gem.add_development_dependency 'rdoc'
  gem.add_development_dependency 'rspec'
  gem.add_development_dependency 'simplecov'
end
