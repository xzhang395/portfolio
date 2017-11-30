require 'helper'

module CSSPool
  module SAC
    class TestProperties < CSSPool::TestCase
      def setup
        super
        @doc = MyDoc.new
        @css = <<-eocss
          @charset "UTF-8";
          @import url("foo.css") screen;
          /* This is a comment */
          div a.foo, #bar, * { background: red; }
          div#a, a.foo, a:hover, a[href][int="10"]{ background: red; }
        eocss
        @parser = CSSPool::SAC::Parser.new(@doc)
        @parser.parse(@css)
      end

      def test_properties
        assert_equal ['background'], @doc.properties.map { |x| x.first }.uniq
        @doc.properties.each do |property|
          assert_equal 1, property[1].length
        end
        assert_equal ['red'], @doc.properties.map { |x| x[1].first.value }.uniq
      end

      def test_ident_with_comma
        doc = MyDoc.new
        parser = CSSPool::SAC::Parser.new(doc)
        parser.parse <<-eocss
          h1 { font-family: Verdana, sans-serif, monospace; }
        eocss
        assert_equal 1, doc.properties.length
        values = doc.properties.first[1]
        assert_equal 3, values.length
        assert_equal [nil, ',', ','],
          values.map { |value| value.operator }
        values.each { |value| assert value.parse_location }
      end
    end
  end
end
