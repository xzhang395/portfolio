# -*- encoding: utf-8 -*-
# stub: html_press 0.8.2 ruby lib

Gem::Specification.new do |s|
  s.name = "html_press".freeze
  s.version = "0.8.2"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["stereobooster".freeze]
  s.date = "2013-06-04"
  s.description = "Ruby gem for compressing html".freeze
  s.email = ["stereobooster@gmail.com".freeze]
  s.homepage = "https://github.com/stereobooster/html_press".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "2.5.2".freeze
  s.summary = "Compress html".freeze

  s.installed_by_version = "2.5.2" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_development_dependency(%q<rspec>.freeze, [">= 0"])
      s.add_development_dependency(%q<rake>.freeze, [">= 0"])
      s.add_runtime_dependency(%q<multi_css>.freeze, [">= 0.1.0"])
      s.add_runtime_dependency(%q<multi_js>.freeze, [">= 0.1.0"])
      s.add_runtime_dependency(%q<htmlentities>.freeze, [">= 0"])
    else
      s.add_dependency(%q<rspec>.freeze, [">= 0"])
      s.add_dependency(%q<rake>.freeze, [">= 0"])
      s.add_dependency(%q<multi_css>.freeze, [">= 0.1.0"])
      s.add_dependency(%q<multi_js>.freeze, [">= 0.1.0"])
      s.add_dependency(%q<htmlentities>.freeze, [">= 0"])
    end
  else
    s.add_dependency(%q<rspec>.freeze, [">= 0"])
    s.add_dependency(%q<rake>.freeze, [">= 0"])
    s.add_dependency(%q<multi_css>.freeze, [">= 0.1.0"])
    s.add_dependency(%q<multi_js>.freeze, [">= 0.1.0"])
    s.add_dependency(%q<htmlentities>.freeze, [">= 0"])
  end
end
