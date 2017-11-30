# -*- encoding: utf-8 -*-
# stub: octopress-minify-html 1.3.1 ruby lib

Gem::Specification.new do |s|
  s.name = "octopress-minify-html".freeze
  s.version = "1.3.1"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Brandon Mathis".freeze]
  s.date = "2016-02-29"
  s.description = "Minify Jekyll's HTML output using html_press".freeze
  s.email = ["brandon@imathis.com".freeze]
  s.homepage = "https://github.com/octopress/minify-html".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "2.5.2".freeze
  s.summary = "Minify Jekyll's HTML output using html_press".freeze

  s.installed_by_version = "2.5.2" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_development_dependency(%q<bundler>.freeze, ["~> 1.3"])
      s.add_development_dependency(%q<rake>.freeze, [">= 0"])
      s.add_development_dependency(%q<clash>.freeze, [">= 0"])
      s.add_runtime_dependency(%q<jekyll>.freeze, [">= 2.0"])
      s.add_runtime_dependency(%q<html_press>.freeze, ["~> 0.8"])
      s.add_runtime_dependency(%q<octopress-hooks>.freeze, [">= 0"])
      s.add_development_dependency(%q<octopress-debugger>.freeze, [">= 0"])
    else
      s.add_dependency(%q<bundler>.freeze, ["~> 1.3"])
      s.add_dependency(%q<rake>.freeze, [">= 0"])
      s.add_dependency(%q<clash>.freeze, [">= 0"])
      s.add_dependency(%q<jekyll>.freeze, [">= 2.0"])
      s.add_dependency(%q<html_press>.freeze, ["~> 0.8"])
      s.add_dependency(%q<octopress-hooks>.freeze, [">= 0"])
      s.add_dependency(%q<octopress-debugger>.freeze, [">= 0"])
    end
  else
    s.add_dependency(%q<bundler>.freeze, ["~> 1.3"])
    s.add_dependency(%q<rake>.freeze, [">= 0"])
    s.add_dependency(%q<clash>.freeze, [">= 0"])
    s.add_dependency(%q<jekyll>.freeze, [">= 2.0"])
    s.add_dependency(%q<html_press>.freeze, ["~> 0.8"])
    s.add_dependency(%q<octopress-hooks>.freeze, [">= 0"])
    s.add_dependency(%q<octopress-debugger>.freeze, [">= 0"])
  end
end
