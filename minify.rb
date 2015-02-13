# Watches current directory for changes to js files
# Automatically minifies them, using YUI Compressor
# YUI Compressor jar file was renamed to 'yui.jar'
# Run by using `ruby minify.rb

require 'listen'

directory = Dir.pwd
puts `clear`
puts "Watching the #{directory} directory for changes"

listener = Listen.to(directory) do |modified, added, removed|
  (modified + added).each do |file|

    # strip the filename from the full pathname
    local = File.basename(file)

    # convert regular js file to minified js file
    if /^.*js/.match(local) && !local.include?('.min.js')
      cmd = "java -jar yui.jar #{file} -o #{file.gsub(/js$/, 'min.js')}"
      puts "#{Time.now.strftime("%H:%M:%S")}: #{file.gsub(directory, '')}" \
           " -> #{file.gsub(directory, '').gsub(/js$/, 'min.js')}"
      `#{cmd}`
    end
  end

  removed.each do |file|
    local = File.basename(file)

    # convert regular js file to minified js file
    if /^.*js/.match(local) && !local.include?('.min.js')
      begin
        File.delete(file.gsub('.js', '.min.js'))
        puts "#{Time.now.strftime("%H:%M:%S")}: #{file.gsub(directory, '')}" \
             " removed, deleting #{file.gsub(directory, '').gsub(/js$/, 'min.js')}"
      rescue Errno::ENOENT => e
        puts "#{Time.now.strftime("%H:%M:%S")}: #{file.gsub(directory, '')}" \
             " removed, but #{file.gsub(directory, '').gsub(/js$/, 'min.js')}" \
             " not found"
      end
    end
  end
end

listener.start
sleep
