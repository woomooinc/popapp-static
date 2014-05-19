
require 'susy'

compass_config do |config|
  config.output_style = :compressed
  config.sass_options = { :line_comments => false }
end

activate :livereload

set :css_dir, 'css'

set :sass_dir, 'css'

set :js_dir, 'js'

set :images_dir, 'img'

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :relative_assets
end
