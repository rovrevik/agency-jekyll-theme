Agency Jekyll Theme Redux
=========================

The waters are a little to muddy to select an excellent and professional looking theme for [Jekyll](http://jekyllrb.com/). The [Start Bootstrap](http://startbootstrap.com/) themes implemented by the folks at [Iron Summit Media Strategies](http://www.ironsummitmedia.com/) look great and make excellent use of the capabilities provided by the framework. The [Agency](http://startbootstrap.com/template-overviews/agency/) theme in particular provides a great starting point for a Organization's web site.

# Project goals
- Aggressively track updates in [Agency bootstrap theme](http://github.com/IronSummitMedia/startbootstrap-agency).
- Follow the look of the [Agency bootstrap theme](http://github.com/IronSummitMedia/startbootstrap-agency) exactly.
- Run perfectly on [GitHub Pages](http://pages.github.com/).
- Clearly manage dependencies separate for the rest of the project.
- DRY up the implementation of [Agency bootstrap theme](http://github.com/IronSummitMedia/startbootstrap-agency) using Jekyll features.
- Follow the implementation and structure of [Agency bootstrap theme](http://github.com/IronSummitMedia/startbootstrap-agency) to allow easy merges.
- Make extensive use of all native Jekyll features where relevant. (Collections, Data Files, Templates...).
- Reduce the need for restarting Jekyll during development to configuration changes.
 
This project was initially forked from [Agency Theme for Jekyll](http://github.com/y7kim/agency-jekyll-theme). This project has quickly deviated from the upstream. The project no longer makes any attempt to synchronize upstream changes. The upstream project is no longer relevant other than for historical purposes for this project.

## Getting started
[Jekyll](http://jekyllrb.com/) is used by [GitHub Pages](http://pages.github.com/). The dependencies used for Jekyll at GitHub are specified [here](http://pages.github.com/versions/).

### RVM
This project includes [RVM](http://rvm.io/rvm/install) .ruby-version and .ruby-gemset files.

- Install [RVM](http://rvm.io/rvm/install) and [Ruby](http://www.ruby-lang.org/).

    ```bash
    # install the stable version of rvm
    $ curl -sSL http://get.rvm.io | bash -s stable
    # install the ruby version used for GitHub Pages (at the time of writing).
    $ rvm install 2.1.1
    # install the projects dependencies`
    $ bundle install`
    ```

    - RVM commands to create gemsets:
    
        ```bash
        # create .ruby-version and .ruby-gemset files using correct ruby version when changing into the project directory
        $ rvm --create --ruby-version use 2.1.1@agency-jekyll-theme-redux
        # or as separate commands if you prefer
        $ rvm gemset create agency-jekyll-theme-redux # create the gemset
        $ rvm 2.1.1@agency-jekyll-theme-redux # use the gemset scoped to the given ruby version
        $ rvm --ruby-version 2.1.1@agency-jekyll-theme-redux  # use it and create the .ruby-version and .ruby-gemset files
        ```
    
    - RVM commands that that are just generally useful:
    
        ```bash
        # set the system ruby as the default in new shells
        $ rvm --default use system
        # set a specific ruby version as the default in new shells
        $ rvm --default use 2.1
        $ rvm gemset list_all
        ```

### Managing project dependencies with [Node.js](http://nodejs.org/)/[npm](http://www.npmjs.com/), [Bower](http://bower.io/) and [Gulp](http://gulpjs.com/)
This project uses a few Node.js-based tools to manage dependencies. The deps directory in the root of the project is managed in GIT and contains all of the project's dependencies organized by name. The name of the projects correspond to the names in Bower. The bower.json file specifies all of the dependencies and versions used by the project. After the Bower dependencies are installed, Gulp is used to copy only the required files from bower_components to the deps directory.

The intent is to manage the project dependencies only with Bower and Gulp. The results get managed with GIT. If dependencies need to be added removed or updated, don't muck with it by hand. Delete the deps directory and let Bower and Gulp recreate it. When the dust settles, commit the contents of the deps directory.

It would be great the hook this mess into the GitHub Pages life-cycle. Until a way to do that is found, this is what we have. 

- Install [nvm](http://github.com/creationix/nvm) and [Node.js](http://nodejs.org/)

    ```bash
    # Install the latests stable version nvm (0.26.1 at the time of writing)
    curl -o- http://raw.githubusercontent.com/creationix/nvm/v0.26.1/install.sh | bash
    # Install the version of Node.js that this project uses. Any 0.12 version should be sufficient.
    nvm install 0.12
    ```

- Install Node.js dependencies with [npm](http://www.npmjs.com/).
    
    ```bash
    # Install the Node.js dependencies with npm.
    npm install
    ```

- Install [Bower](http://bower.io/) dependencies.
    
    ```bash
    # Install the bower dependencies.
    bower install
    ```

- Execute gulp to update the project's dependencies.
    
    ```bash
    # Execute gulp to update the dependencies.
    gulp bower-files
    ```

## How to use

### Services
- Services are in the '/_services' directory.

### Portfolio
- Portfolio projects are in the '/_portfolio' directory.
- Images are in '/img/portfolio'

### About
- Events in the Timeline are in _timeline directory.
- Images are in '/img/about/'

### Team
- Team members and info are in the '_team' directory.
- Default team images:
    - Image Directory: '/img/team/'
    - Images Size: 225 × 225 pixels
    - Image DPI: 72 pixels/inch

## Demo
- View this jekyll theme in action [here](http://rovrevik.github.io/agency-jekyll-theme-redux)

For more details, read [documentation](http://jekyllrb.com/)

## TODO
- contact form validation isnt working well at all like upstream
- make better use of cdns for dependencies
- concatenate js and css
- conform to the spirit and approach of a default generated jekyll project better
