require 'bundler'
Bundler::GemHelper.install_tasks

require 'rspec/core/rake_task'
desc "Run all examples"
RSpec::Core::RakeTask.new(:spec)

task :default => :spec
task :test => :spec

namespace :doc do
  require 'rdoc/task'
  require File.expand_path('../lib/multi_js/version', __FILE__)
  RDoc::Task.new do |rdoc|
    rdoc.rdoc_dir = 'rdoc'
    rdoc.title = "multi_js #{MultiJs::VERSION}"
    rdoc.main = 'README.md'
    rdoc.rdoc_files.include('README.md', 'LICENSE.md', 'lib/**/*.rb')
  end
end

desc "generate report"
RSpec::Core::RakeTask.new(:report) do |task|
  task.pattern = 'report/*_spec.rb'
  task.fail_on_error = false
  task.rspec_opts = "--format ReportFormatter --require #{File.expand_path('../report/report_formatter', __FILE__)} --out report/report.html"
end

desc "publish report"
task "report:publish" => :report do
  fail "Not implemented yet"
  # TODO fail if something not commited
  sh 'git status'
  # TODO get latest commit message and SHA
  sh 'git log'
  message = nil
  sha = nil
  # TODO copy report files to temp directory
  sh 'git checkout --orphan gh-pages'
  sh 'git rm -rf .'
  # TODO copy report files from temp directory
  sh 'git add .'
  sh "git commit -a -m 'report: #{message} #{sha}'"
  sh 'git push origin gh-pages'
  sh 'git checkout master'
end
