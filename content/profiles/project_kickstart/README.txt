-- SUMMARY --

The main purpose of Project Kickstart distribution is to start the Drupal
project development quickly with the best recommended libraries / modules /
themes. Site builders can also use this distribution as it has features like
responsive design for mobile devices, in-place content editing, pre-configured
CKEditor WYSIWYG tool!

Generally we start the Drupal project development with downloading latest Drupal
core and many contributed modules. For example, we need to go through various 
modules to find out the best suited modules for different purposes like Content,
Mail, Search, Performance, User Management, Developer Tools etc. Then we need
to enable those modules and need to look for dependencies, if any.

So to improve this process, we have packaged Project Kickstart distribution with
latest Drupal core and commonly used modules. All of the contributed modules,
have been picked carefully and used by us in many projects.

Hope Project Kickstart distribution will not only save your time but also help
you to use the best recommended libraries / modules / themes!


-- REQUIREMENTS --

There are no specific requirements for Project Kickstart distribution. Please 
go through this link to know more about system requirements for Drupal setup 
https://drupal.org/requirements.


-- INSTALLATION --

Project Kickstart distribution will have setup similar to any other Drupal site.
Please go through this link - http://drupal.org/node/306267/ to know
installation instructions.


-- DRUSH MAKE --

In case you want to build the profile from git clone,

drush make build-project_kickstart.make /path/to/wwwroot

This will assemble a copy of Drupal core with the latest copy of the Project
Kickstart distribution files from Git, along with all of its dependencies.

There are two other .make files, which are called from the "build" one:

- drupal-org-core.make:
  This file just contains the definition for how to package Drupal core. We
  hopefully shouldn't have to edit this much, unless we need to add additional
  core patches.

- drupal-org.make:
  This file is where the bulk of the work happens; contributed modules/themes,
  external libraries, non-core patches, etc. are all handled here.
