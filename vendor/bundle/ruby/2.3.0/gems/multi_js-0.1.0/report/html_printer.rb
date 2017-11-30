require 'erb'

class HtmlPrinter
  include ERB::Util # for the #h method
  def initialize(output)
    @output = output
  end

  def print_html_start
    @output.puts HTML_HEADER
    # @output.puts REPORT_HEADER
  end

  def print_summary( was_dry_run, duration, example_count, failure_count, pending_count )
    # TODO - kill dry_run?
    # if was_dry_run
    #   totals = "This was a dry-run"
    # else
    #   totals =  "#{example_count} example#{'s' unless example_count == 1}, "
    #   totals << "#{failure_count} failure#{'s' unless failure_count == 1}"
    #   totals << ", #{pending_count} pending" if pending_count > 0
    # end

    # formatted_duration = sprintf("%.5f", duration)

    # @output.puts "<script>document.getElementById('duration').innerHTML = \"Finished in <strong>#{formatted_duration} seconds</strong>\";</script>"
    # @output.puts "<script>document.getElementById('totals').innerHTML = \"#{totals}\";</script>"
    @output.puts "</body></html>"
  end

  def print_table(table, table_header)
    @output.puts '<table class="table table-striped"><thead><tr><th>&nbsp;</th>'
    table_header.keys.each do |name|
      @output.puts "<th>#{h(name)}</th>"
    end
    @output.puts "</tr></thead><tbody>"
    table.each do |name, examples|
      @output.puts "<tr><td>#{h(name)}</td>"
      examples.each do |name, value|
        @output.puts "<td>#{h(value.to_s)}</td>"
      end
      @output.puts "</tr>"
    end
    @output.puts "</tbody></table>"
  end

  def flush
    @output.flush
  end

  private

#   REPORT_HEADER = <<-EOF
# <div id="summary">
#   <p id="totals">&nbsp;</p>
#   <p id="duration">&nbsp;</p>
# </div>
# EOF

  HTML_HEADER = <<-EOF
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <title>Report</title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width">
  <link rel="stylesheet" href="bootstrap.css">
</head>
<body>
EOF

end
