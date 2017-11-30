# -*- encoding: utf-8 -*-
# stub: css_press 0.3.2 ruby lib

Gem::Specification.new do |s|
  s.name = "css_press".freeze
  s.version = "0.3.2"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["stereobooster".freeze]
  s.date = "2012-08-06"
  s.description = "Ruby gem for compressing CSS".freeze
  s.email = ["stereobooster@gmail.com".freeze]
  s.homepage = "".freeze
  s.rubyforge_project = "css_press".freeze
  s.rubygems_version = "2.5.2".freeze
  s.summary = "Compress CSS".freeze

  s.installed_by_version = "2.5.2" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 3

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<csspool-st>.freeze, ["= 3.1.2"])
      s.add_runtime_dependency(%q<json>.freeze, [">= 0"])
      s.add_development_dependency(%q<rake>.freeze, [">= 0"])
      s.add_development_dependency(%q<rspec>.freeze, [">= 0"])
    else
      s.add_dependency(%q<csspool-st>.freeze, ["= 3.1.2"])
      s.add_dependency(%q<json>.freeze, [">= 0"])
      s.add_dependency(%q<rake>.freeze, [">= 0"])
      s.add_dependency(%q<rspec>.freeze, [">= 0"])
    end
  else
    s.add_dependency(%q<csspool-st>.freeze, ["= 3.1.2"])
    s.add_dependency(%q<json>.freeze, [">= 0"])
    s.add_dependency(%q<rake>.freeze, [">= 0"])
    s.add_dependency(%q<rspec>.freeze, [">= 0"])
  end
end
