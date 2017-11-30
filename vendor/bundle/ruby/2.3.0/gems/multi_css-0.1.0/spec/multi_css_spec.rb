require 'helper'
require 'adapter_shared_example'
require 'stringio'

describe 'MultiCss' do
  context 'adapters' do
    before do
      MultiCss.use nil
    end
    context 'when no other implementations are available' do

      CONSTS = [:CssPress, :CSSminify, :Yuicssmin, :YUI, :Rainpress]

      before do
        @old_map = MultiCss::REQUIREMENT_MAP
        @old_consts = {}
        CONSTS.each do |c|
          @old_consts[c] = Object.const_get c if Object.const_defined?(c)
        end

        MultiCss::REQUIREMENT_MAP.each_with_index do |(library, adapter), index|
          MultiCss::REQUIREMENT_MAP[index] = ["foo/#{library}", adapter]
        end

        CONSTS.each do |c|
           Object.send :remove_const, c if @old_consts[c]
        end
      end

      after do
        @old_map.each_with_index do |(library, adapter), index|
          MultiCss::REQUIREMENT_MAP[index] = [library, adapter]
        end

        CONSTS.each do |c|
           Object.const_set c, @old_consts[c] if @old_consts[c]
        end
      end

      it 'defaults to vendored implemention if no other implementions are available' do
        MultiCss.default_adapter.should eq :css_press
      end
    end

    it 'defaults to the best not vendored lib if any other lib available' do
      require 'cssminify'
      MultiCss.adapter.name.should eq 'MultiCss::Adapters::Cssminify'
    end

    it 'is settable via a symbol' do
      MultiCss.use :cssminify
      MultiCss.adapter.name.should eq 'MultiCss::Adapters::Cssminify'
    end

    it 'is settable via a class' do
      MultiCss.use MockDecoder
      MultiCss.adapter.name.should eq 'MockDecoder'
    end
  end

  %w(css_press cssminify yuicssmin rainpress).each do |adapter|
    context adapter do
      it_behaves_like "an adapter", adapter
    end
  end
end

