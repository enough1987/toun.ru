api = "2"
core = "7.x"

; Include the definition for how to build Drupal core directly, including patches:
includes[] = drupal-org-core.make

;projects[drupal][version] = "7.x"
;includes[] = "drupal-org.make"

; Download the project_kickstart install profile and recursively build all its dependencies:
;projects[project_kickstart][version] = 7.x-1.x
;projects[project_kickstart][download][url] = "http://git.drupal.org/project/project_kickstart.git"
projects[project_kickstart][type] = "profile"
projects[project_kickstart][download][type] = "git"
projects[project_kickstart][download][branch] = "7.x-1.x"
