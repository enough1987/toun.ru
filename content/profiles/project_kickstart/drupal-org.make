; This is a standard make file for packaging the distribution along with any
; contributed modules/themes or external libraries.
; See http://drupal.org/node/159730 for more details.

api = 2
core = 7.x

;;;
; Projects
;;;
projects[admin_menu][version] = 3.0-rc5
projects[admin_menu][type] = module
projects[admin_menu][subdir] = contrib

projects[ajaxblocks][version] = 1.4
projects[ajaxblocks][type] = module
projects[ajaxblocks][subdir] = contrib

projects[apachesolr][version] = 1.8
projects[apachesolr][type] = module
projects[apachesolr][subdir] = contrib

projects[apachesolr_attachments][version] = 1.4
projects[apachesolr_attachments][type] = module
projects[apachesolr_attachments][subdir] = contrib

projects[apachesolr_autocomplete][version] = 1.5
projects[apachesolr_autocomplete][type] = module
projects[apachesolr_autocomplete][subdir] = contrib

;projects[apc][version] = 1.0-beta4
;projects[apc][type] = module
;projects[apc][subdir] = contrib

projects[auto_entitylabel][version] = 1.3
projects[auto_entitylabel][type] = module
projects[auto_entitylabel][subdir] = contrib

projects[backup_migrate][version] = 3.1
projects[backup_migrate][type] = module
projects[backup_migrate][subdir] = contrib

projects[breakpoints][version] = 1.4
projects[breakpoints][type] = module
projects[breakpoints][subdir] = contrib

projects[ckeditor][version] = 1.17
projects[ckeditor][type] = module
projects[ckeditor][subdir] = contrib

projects[coder][version] = 2.6
projects[coder][type] = module
projects[coder][subdir] = contrib

projects[coffee][version] = 2.2
projects[coffee][type] = module
projects[coffee][subdir] = contrib

projects[colorbox][version] = 2.10
projects[colorbox][type] = module
projects[colorbox][subdir] = contrib

projects[context][version] = 3.6
projects[context][type] = module
projects[context][subdir] = contrib

projects[context_rules][version] = 1.0-beta2
projects[context_rules][type] = module
projects[context_rules][subdir] = contrib

projects[ctools][version] = 1.9
projects[ctools][type] = module
projects[ctools][subdir] = contrib

projects[date][version] = 2.9
projects[date][type] = module
projects[date][subdir] = contrib

projects[devel][version] = 1.5
projects[devel][type] = module
projects[devel][subdir] = contrib

projects[devel_themer][version] = 1.x-dev
projects[devel_themer][type] = module
projects[devel_themer][subdir] = contrib

projects[diff][version] = 3.2
projects[diff][type] = module
projects[diff][subdir] = contrib

projects[quickedit][version] = 1.4
projects[quickedit][type] = module
projects[quickedit][subdir] = contrib

projects[elysia_cron][version] = 2.1
projects[elysia_cron][type] = module
projects[elysia_cron][subdir] = contrib

projects[email][version] = 1.3
projects[email][type] = module
projects[email][subdir] = contrib

projects[email_registration][version] = 1.3
projects[email_registration][type] = module
projects[email_registration][subdir] = contrib

;projects[emfield][version] = 1.0-alpha2
;projects[emfield][type] = module
;projects[emfield][subdir] = contrib

projects[entity][version] = 1.6
projects[entity][type] = module
projects[entity][subdir] = contrib

projects[entitycache][version] = 1.5
projects[entitycache][type] = module
projects[entitycache][subdir] = contrib

projects[entityreference][version] = 1.1
projects[entityreference][type] = module
projects[entityreference][subdir] = contrib

projects[entityreference_prepopulate][version] = 1.6
projects[entityreference_prepopulate][type] = module
projects[entityreference_prepopulate][subdir] = contrib

projects[fast_404][version] = 1.5
projects[fast_404][subdir] = contrib
projects[fast_404][type] = module

projects[features][version] = 2.7
projects[features][subdir] = contrib
projects[features][type] = module

;projects[features_override][version] = 2.0-rc3
;projects[features_override][subdir] = contrib
;projects[features_override][type] = module

projects[fivestar][version] = 2.1
projects[fivestar][subdir] = contrib
projects[fivestar][type] = module

projects[flag][version] = 3.7
projects[flag][subdir] = contrib
projects[flag][type] = module

;projects[ftools][version] = 1.6
;projects[ftools][subdir] = contrib
;projects[ftools][type] = module

;projects[getid3][version] = 1.0
;projects[getid3][subdir] = contrib
;projects[getid3][type] = module

projects[globalredirect][version] = 1.5
projects[globalredirect][subdir] = contrib
projects[globalredirect][type] = module

projects[google_analytics][version] = 2.1
projects[google_analytics][subdir] = contrib
projects[google_analytics][type] = module

;projects[google_analytics_counter][version] = 2.1
;projects[google_analytics_counter][subdir] = contrib
;projects[google_analytics_counter][type] = module

;projects[grammar_parser_lib][version] = 2.1
;projects[grammar_parser_lib][subdir] = contrib
;projects[grammar_parser_lib][type] = module

projects[gridbuilder][version] = 1.0-alpha2
projects[gridbuilder][subdir] = contrib
projects[gridbuilder][type] = module

;projects[hacked][version] = 2.0-beta4
;projects[hacked][subdir] = contrib
;projects[hacked][type] = module

projects[hybridauth][version] = 2.14
projects[hybridauth][subdir] = contrib
projects[hybridauth][type] = module

projects[invite][version] = 4.0-beta2
projects[invite][subdir] = contrib
projects[invite][type] = module

projects[jquery_update][version] = 2.7
projects[jquery_update][subdir] = contrib
projects[jquery_update][type] = module

projects[json2][version] = 1.1
projects[json2][subdir] = contrib
projects[json2][type] = module

projects[layout][version] = 1.0-alpha6
projects[layout][subdir] = contrib
projects[layout][type] = module

projects[libraries][version] = 2.2
projects[libraries][subdir] = contrib
projects[libraries][type] = module

projects[login_destination][version] = 1.4
projects[login_destination][subdir] = contrib
projects[login_destination][type] = module

projects[memcache][version] = 1.5
projects[memcache][subdir] = contrib
projects[memcache][type] = module

projects[metatag][version] = 1.13
projects[metatag][subdir] = contrib
projects[metatag][type] = module

projects[module_filter][version] = 2.0
projects[module_filter][subdir] = contrib
projects[module_filter][type] = module

projects[nodequeue][version] = 2.0
projects[nodequeue][subdir] = contrib
projects[nodequeue][type] = module

;projects[pasc][version] = 1.0-beta1
;projects[pasc][subdir] = contrib
;projects[pasc][type] = module

projects[panels][version] = 3.5
projects[panels][subdir] = contrib
projects[panels][type] = module

projects[pathauto][version] = 1.3
projects[pathauto][subdir] = contrib
projects[pathauto][type] = module

projects[persistent_login][version] = 1.0-rc1
projects[persistent_login][subdir] = contrib
projects[persistent_login][type] = module

projects[print][version] = 2.0
projects[print][subdir] = contrib
projects[print][type] = module

projects[privatemsg][version] = 1.4
projects[privatemsg][subdir] = contrib
projects[privatemsg][type] = module

projects[profile2][version] = 1.3
projects[profile2][subdir] = contrib
projects[profile2][type] = module

projects[profile2_regpath][version] = 1.12
projects[profile2_regpath][subdir] = contrib
projects[profile2_regpath][type] = module

;projects[realname][version] = 1.1
;projects[realname][subdir] = contrib
;projects[realname][type] = module

;projects[recaptcha][version] = 1.10
;projects[recaptcha][subdir] = contrib
;projects[recaptcha][type] = module

projects[rules][version] = 2.9
projects[rules][subdir] = contrib
projects[rules][type] = module

projects[schema][version] = 1.2
projects[schema][subdir] = contrib
projects[schema][type] = module

projects[security_review][version] = 1.2
projects[security_review][subdir] = contrib
projects[security_review][type] = module

projects[service_links][version] = 2.3
projects[service_links][subdir] = contrib
projects[service_links][type] = module

projects[simplehtmldom][version] = 1.12
projects[simplehtmldom][subdir] = contrib
projects[simplehtmldom][type] = module

projects[strongarm][version] = 2.0
projects[strongarm][subdir] = contrib
projects[strongarm][type] = module

projects[token][version] = 1.6
projects[token][subdir] = contrib
projects[token][type] = module

projects[url][version] = 1.0
projects[url][subdir] = contrib
projects[url][type] = module

;projects[varnish][version] = 1.0-beta2
;projects[varnish][subdir] = contrib
;projects[varnish][type] = module

projects[views][version] = 3.13
projects[views][subdir] = contrib
projects[views][type] = module

projects[views_bulk_operations][version] = 3.3
projects[views_bulk_operations][subdir] = contrib
projects[views_bulk_operations][type] = module

projects[views_rules][version] = 1.0
projects[views_rules][subdir] = contrib
projects[views_rules][type] = module

projects[views_slideshow][version] = 3.1
projects[views_slideshow][subdir] = contrib
projects[views_slideshow][type] = module

projects[votingapi][version] = 2.12
projects[votingapi][subdir] = contrib
projects[votingapi][type] = module

;projects[xhprof][version] = 1.0-beta2
;projects[xhprof][subdir] = contrib
;projects[xhprof][type] = module

projects[xmlsitemap][version] = 2.2
projects[xmlsitemap][subdir] = contrib
projects[xmlsitemap][type] = module

projects[responsive_bartik][version] = 1.0
projects[responsive_bartik][type] = theme

libraries[colorbox][type] = "libraries"
libraries[colorbox][download][type] = "git"
libraries[colorbox][download][url] = "https://github.com/jackmoore/colorbox.git"

;libraries[grammar_parser][type] = "libraries"
;libraries[grammar_parser][download][type] = "git"
;libraries[grammar_parser][download][url] = "http://git.drupal.org/project/grammar_parser.git"

libraries[ckeditor][type] = "libraries"
libraries[ckeditor][download][type] = "get"
;libraries[ckeditor][download][url] = "http://download.cksource.com/CKEditor/CKEditor/CKEditor%204.0.1/ckeditor_4.0.1_standard.zip"
libraries[ckeditor][download][url] = "http://download.cksource.com/CKEditor/CKEditor/CKEditor%204.5.7/ckeditor_4.5.7_full.zip"

libraries[json2][download][type] = get
libraries[json2][download][url] = https://raw.github.com/douglascrockford/JSON-js/master/json2.js
libraries[json2][revision] = fc535e9cc8fa78bbf45a85835c830e7f799a5084

;libraries[underscore][download][type] = get
;libraries[underscore][download][url] = http://documentcloud.github.io/underscore/underscore-min.js

;libraries[backbone][download][type] = get
;libraries[backbone][download][url] = http://documentcloud.github.io/backbone/backbone-min.js
