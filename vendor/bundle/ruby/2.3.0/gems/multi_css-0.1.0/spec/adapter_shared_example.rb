shared_examples_for "an adapter" do |adapter|

  before do
    begin
      MultiCss.use adapter
    rescue LoadError
      pending "Adapter #{adapter} couldn't be loaded (not installed?)"
    end
  end

  describe '.min' do
    it 'minify' do
      MultiCss.min("a { color: red;\n background: red ;  } ").should eq 'a{color:red;background:red}'
      MultiCss.min_attr(" color: red;\n background: red ; ").should eq 'color:red;background:red'
    end

    if adapter == 'css_press'
      it 'throws exception if parse error occurred' do
        lambda { MultiCss.min('a{b:') }.should raise_error MultiCss::ParseError
      end
    else
      it 'doesn\'t throw exception if parse error occurred' do
        lambda { MultiCss.min('a{b:') }.should_not raise_error
      end
    end
  end
end
