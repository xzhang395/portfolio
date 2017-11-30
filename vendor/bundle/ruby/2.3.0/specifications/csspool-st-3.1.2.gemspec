# -*- encoding: utf-8 -*-
# stub: csspool-st 3.1.2 ruby lib

Gem::Specification.new do |s|
  s.name = "csspool-st".freeze
  s.version = "3.1.2"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Aaron Patterson".freeze, "John Barnette".freeze, "stereobooster".freeze]
  s.date = "2012-04-28"
  s.description = "Fork of CSSPool. CSSPool is a CSS parser.  CSSPool provides a SAC interface for parsing CSS as\nwell as a document oriented interface for parsing CSS.".freeze
  s.email = ["aaronp@rubyforge.org".freeze, "jbarnette@rubyforge.org".freeze, "stereobooster@gmail.com".freeze]
  s.extra_rdoc_files = ["CHANGELOG.rdoc".freeze, "Manifest.txt".freeze, "README.rdoc".freeze]
  s.files = ["CHANGELOG.rdoc".freeze, "Manifest.txt".freeze, "README.rdoc".freeze]
  s.homepage = "https://github.com/stereobooster/csspool".freeze
  s.rdoc_options = ["--main".freeze, "README.rdoc".freeze]
  s.rubyforge_project = "csspool-st".freeze
  s.rubygems_version = "2.5.2".freeze
  s.summary = "Fork of CSSPool".freeze

  s.installed_by_version = "2.5.2" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 3

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_development_dependency(%q<rdoc>.freeze, ["~> 3.10"])
      s.add_development_dependency(%q<racc>.freeze, [">= 0"])
      s.add_development_dependency(%q<rexical>.freeze, [">= 0"])
      s.add_development_dependency(%q<hoe-git>.freeze, [">= 0"])
      s.add_development_dependency(%q<hoe-gemspec>.freeze, [">= 0"])
      s.add_development_dependency(%q<hoe-bundler>.freeze, [">= 0"])
      s.add_development_dependency(%q<hoe>.freeze, ["~> 3.0"])
    else
      s.add_dependency(%q<rdoc>.freeze, ["~> 3.10"])
      s.add_dependency(%q<racc>.freeze, [">= 0"])
      s.add_dependency(%q<rexical>.freeze, [">= 0"])
      s.add_dependency(%q<hoe-git>.freeze, [">= 0"])
      s.add_dependency(%q<hoe-gemspec>.freeze, [">= 0"])
      s.add_dependency(%q<hoe-bundler>.freeze, [">= 0"])
      s.add_dependency(%q<hoe>.freeze, ["~> 3.0"])
    end
  else
    s.add_dependency(%q<rdoc>.freeze, ["~> 3.10"])
    s.add_dependency(%q<racc>.freeze, [">= 0"])
    s.add_dependency(%q<rexical>.freeze, [">= 0"])
    s.add_dependency(%q<hoe-git>.freeze, [">= 0"])
    s.add_dependency(%q<hoe-gemspec>.freeze, [">= 0"])
    s.add_dependency(%q<hoe-bundler>.freeze, [">= 0"])
    s.add_dependency(%q<hoe>.freeze, ["~> 3.0"])
  end
end
