# Middleman Configuration File
#
# @author Ian Warner <ian.warner@drykiss.com>
# @see http://middlemanapp.com/

# External pipeline - Webpack
activate :external_pipeline do |i|
  i.name = :webpack
  i.command = build? ?
    "./node_modules/webpack/bin/webpack.js --bail -p" :
    "./node_modules/webpack/bin/webpack.js --watch -d"
  i.source = '.tmp'
  i.latency = 1
end

# Variables
config[:layout_dir] = '_codeBlender/'
config[:layout] = "_lib/sidebar"
config[:partials_dir] = "partial/_codeBlender"
config[:haml] = { ugly: true, format: :html5 }

# Assets
config[:css_dir] = 'assets/stylesheets'
config[:js_dir] = 'assets/javascripts'
config[:images_dir] = 'assets/images'

# Markdown engine and options
# auto_ids, footnote_nr, entity_output, toc_levels, smart_quotes, kramdown_default_lang, input, hard_wrap
# @see http://kramdown.gettalong.org/options.html
set :markdown_engine, :kramdown
set :markdown, toc_levels: "2", auto_id_prefix: "#"

# Time Zone
Time.zone = "Europe/London"

# I18n
# @see https://middlemanapp.com/advanced/localization/
# @see http://www.rubydoc.info/github/svenfuchs/i18n/I18n
activate :i18n do |i|
  i.data = 'locales/'
  i.locales = [:en]
  i.mount_at_root = :en
end

# Middleman Deploy
# @see https://github.com/middleman-contrib/middleman-deploy
activate :deploy do | deploy |
  deploy.deploy_method = :git
  deploy.remote = 'git@github.com:DryKISSClients/greentouchpi.com.git'
  deploy.build_before = true
end

# Proxy
proxy 'blog.html', 'modules/blog/blog.html', ignore: true

# Blog
# Template files cannot be within a folder path with a _ i.e. _codeBlender/template
# @see https://elenichappen.svbtle.com/getting-tags-to-work-with-middlemans-blog-gem
activate :blog do |blog|

  # General
  blog.name = 'blog'
  blog.default_extension = '.erb'
  blog.layout = 'article'

  # Permalink
  blog.permalink = "{category}/{title}.html"

  # Source
  blog.sources = "/blog/:id.html"

  # Archive
  blog.generate_day_pages = false
  blog.generate_month_pages = false
  blog.calendar_template = 'template/calendar.html'
  blog.year_link = "archive/:year.html"

  # Tag
  blog.tag_template = 'template/tag.html'
  blog.taglink = "tag/:tag.html"

  # Pagination
  blog.paginate = true
  blog.per_page = 10
  blog.page_link = "page/{num}"

  # Custom collections
  blog.custom_collections = {
    # Category
    category: {
      link: "{category}.html",
      template: 'template/category.html'
    },

    # Author
    author: {
      link: "{author}.html",
      template: 'template/author.html'
    }
  }
end

# Directory Index
activate :directory_indexes

# Build-specific configuration
configure :build do

    # Asset hash
    activate :asset_hash, :exts => %w(.js .css)

    # GZIP Files
    # @see https://middlemanapp.com/advanced/file_size_optimization/
    # activate :gzip

    # Use relative URLs
    activate :relative_assets

    # For example, change the Compass output style for deployment
    # activate :minify_css, inline: true

    # Minimise JavaScript on build
    # @see https://github.com/crtvhd/middleboy
    # activate :minify_javascript
    # activate :minify_javascript, inline: true, compressor: Uglifier.new( mangle: false, comments: :none )

    # Minimise HTML
    # https://github.com/middleman/middleman-minify-html
    activate :minify_html

    # # Favicon
    # # @see https://github.com/follmann/middleman-favicon-maker
    # activate :favicon_maker do | f |

    #     # Template
    #     f.template_dir = File.join( root, 'source/assets/images/favicon' )
    #     f.output_dir   = File.join( root, 'build/assets/images/favicon' )

    #     # Icon
    #     f.icons = {

    #         # High resolution icon
    #         "favicon_template_hires.png" => [
    #             { icon: "favicon-152x152.png" },
    #             { icon: "favicon-120x120.png" },
    #             { icon: "favicon-76x76.png"   },
    #             { icon: "favicon-60x60.png"   },
    #             { icon: "favicon-32x32.png"   },
    #             { icon: "favicon-16x16.png"   },
    #             { icon: "favicon.ico", size: "64x64,32x32,24x24,16x16" }
    #         ]
    #     }

    # end

    # Favicon
    activate :favicon_maker, :icons => {
        "favicon_template.png" => [
            { icon: "favicon.png", size: "32x32" },
            { icon: "favicon.ico", size: "64x64,32x32,24x24,16x16" },
        ]
    }

end
