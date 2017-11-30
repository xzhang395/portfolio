shared_examples_for "an adapter" do |adapter|

  before do
    begin
      MultiJs.use adapter
    rescue LoadError
      pending "Adapter #{adapter} couldn't be loaded (not installed?)"
    end
  end

  describe '.compile' do
    it 'minify' do
      js = "(function(){var long_name=1}())"
      MultiJs.compile(js).length.should be < js.length
    end

    it 'throws exception if parse error occurred' do
      lambda { MultiJs.compile('error statement') }.should raise_error MultiJs::ParseError
    end

    it 'support :inline_script option' do
      js = 'var a="<\/script>";'
      MultiJs.compile(js, :output => {:inline_script => true}).should eq js
    end
  end
end
