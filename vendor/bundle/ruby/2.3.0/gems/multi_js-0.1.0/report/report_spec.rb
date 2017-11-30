require File.expand_path('../../spec/helper', __FILE__)
require File.expand_path('../../spec/adapter_shared_example', __FILE__)

describe 'MultiJs' do
  %w(closure uglifier).each do |adapter|
    context adapter do
      it_behaves_like "an adapter", adapter
    end
  end
end
