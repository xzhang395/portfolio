require 'rspec/core/formatters/base_text_formatter'
require File.expand_path('../html_printer', __FILE__)

class ReportFormatter < RSpec::Core::Formatters::BaseTextFormatter

  def initialize(output)
    super(output)
    @printer = HtmlPrinter.new(output)

    # @output = output
    @adapter = nil
    @table = {}
    @table_header = {}
  end

  private
  def method_missing(m, *a, &b)
    # no-op
  end

  public
  def message(message)
  end

  def start(example_count)
    super(example_count)
    @printer.print_html_start
  end

  def example_group_started(example_group)
    super(example_group)
    if example_group.parent_groups.size == 2
      @adapter = example_group.description
    end
  end

  def example_add(example, val)
    @table[example.description] ||= {}
    @table[example.description][@adapter] = val
    @table_header[@adapter] = true
  end

  def example_passed(example)
    example_add(example, true)
  end

  def example_failed(example)
    super(example)

    example_add(example, false)

    # exception = example.metadata[:execution_result][:exception]
    # exception_details = if exception
    #   { 
    #     :message => exception.message, 
    #     :backtrace => format_backtrace(exception.backtrace, example).join("\n")
    #   }
    # else
    #   false 
    # end
  end

  def dump_summary(duration, example_count, failure_count, pending_count)
    @printer.print_table(@table, @table_header)

    @printer.print_summary(
      dry_run?,
      duration,
      example_count,
      failure_count,
      pending_count
    )

    @printer.flush
  end
end
