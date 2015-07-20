# Fieldthings web site

## Getting started
Jekyll is used by [GitHub Pages](https://pages.github.com/). The dependencies used for Jekyll at GitHub are specified [here](https://pages.github.com/versions/).

- Install [RVM](https://rvm.io/rvm/install).
```bash
# install the stable version of rvm
$ curl -sSL https://get.rvm.io | bash -s stable
# install the ruby version used for GitHub Pages (at the time of writing).
$ rvm install 2.1.1
# install the projects dependencies`
$ bundle install`
```

- RVM commands to create gemsets:
```bash
# create .ruby-version and .ruby-gemset files using correct ruby version when changing into the project directory
$ rvm --create --ruby-version use 2.1.1@fieldthings-site
# or as separate commands if you prefer
$ rvm gemset create fieldthings-site # create the gemset
$ rvm 2.1.1@fieldthings-site # use the gemset scoped to the given ruby version
$ rvm --ruby-version 2.1.1@fieldthings-site  # use it and create the .ruby-version and .ruby-gemset files
```

- RVM commands that that are just generally useful:
```bash
# set the system ruby as the default in new shells
$ rvm --default use system
# set a specific ruby version as the default in new shells
$ rvm --default use 2.1
$ rvm gemset list_all
```
