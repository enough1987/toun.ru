; A separate drupal-org-core.make file makes it so we can apply core patches
; if we need to.

api = "2"
core = "7.x"
projects[drupal][type] = "core"
projects[drupal][version] = "7.43"

; CORE PATCHES

; Add ability to pass #attributes to the drupal_add_js function.
projects[drupal][patch][1664602] = https://www.drupal.org/files/issues/js_attributes-1664602-104.patch
