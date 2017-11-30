require 'helper'
require 'adapter_shared_example'
require 'stringio'

describe 'MultiJs' do
  context 'adapters' do
    before do
      MultiJs.use nil
    end
    context 'when no other implementations are available' do

      CONSTS = [:Closure, :YUI, :Uglifier]

      before do
        @old_map = MultiJs::REQUIREMENT_MAP
        @old_consts = {}
        CONSTS.each do |c|
          @old_consts[c] = Object.const_get c if Object.const_defined?(c)
        end

        MultiJs::REQUIREMENT_MAP.each_with_index do |(library, adapter), index|
          MultiJs::REQUIREMENT_MAP[index] = ["foo/#{library}", adapter]
        end

        CONSTS.each do |c|
           Object.send :remove_const, c if @old_consts[c]
        end
      end

      after do
        @old_map.each_with_index do |(library, adapter), index|
          MultiJs::REQUIREMENT_MAP[index] = [library, adapter]
        end

        CONSTS.each do |c|
           Object.const_set c, @old_consts[c] if @old_consts[c]
        end
      end

      it 'defaults to vendored implemention if no other implementions are available' do
        MultiJs.default_adapter.should eq :uglifier
      end
    end

    it 'defaults to the best not vendored lib if any other lib available' do
      require 'closure-compiler'
      MultiJs.adapter.name.should eq 'MultiJs::Adapters::Closure'
    end

    it 'is settable via a symbol' do
      MultiJs.use :closure
      MultiJs.adapter.name.should eq 'MultiJs::Adapters::Closure'
    end

    it 'is settable via a class' do
      MultiJs.use MockDecoder
      MultiJs.adapter.name.should eq 'MockDecoder'
    end
  end

  %w(closure uglifier).each do |adapter|
    context adapter do
      it_behaves_like "an adapter", adapter
    end
  end
end

