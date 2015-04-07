# Badges, Badges, Badges, Badges ...
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
[![Build Status](https://travis-ci.org/OmerHerera/badges.svg?branch=master)](https://travis-ci.org/OmerHerera/badges)
[![Code Climate](https://codeclimate.com/github/OmerHerera/badges/badges/gpa.svg)](https://codeclimate.com/github/OmerHerera/badges)
[![Coverage Status](https://coveralls.io/repos/OmerHerera/badges/badge.svg)](https://coveralls.io/r/OmerHerera/badges)

Tutorial when creating a new repo and want to use badges ;-)

* * *

####Build Process
Meet Travis CI
![Meet Travis CI](/images/travis-mascot-200px.png)

I choosed Travis CI, its free for open/public repos. 
What is Travis:
In software development, Travis CI is an open-source hosted, distributed continuous integration service used to build and test projects hosted at GitHub. Travis CI is configured by adding a file named .travis.yml, which is a YAML format text file, to the root directory of the GitHub repository.

More in [Travis CI](https://travis-ci.org)

###Adding the npm task for travis-ci
Travis CI runs ```npm test``` after it fetched your project and installed the dependencies, so we need to add this task to the package.json file.

```
"scripts": {
  "test": "grunt default --verbose"
}
```

*<strong>I’ve added the --verbose option, so we’ll see more output of what is going on.</strong>*
 
####Adding the .travis.yml
Every Travis CI project needs to have a .travis.yml file in the root of the project folder, so it know what platform and version it should use to build/test your project. Here’s the one I used:

```
language: node_js
node_js:
   - "0.10"
```

After these changes your project is ready to be continuously builded with Travis CI. 

*<strong>But don’t forget to setup the Service Hook on Github!</strong>*

Now You can use the build status badge:
Read more in [here](http://docs.travis-ci.com/user/status-images/)

* * * 

####Code Analysis
I'm using [Code Climate](https://codeclimate.com/)

What is Code Climate: 
Code Climate hosted software metrics help you ship quality Ruby, PHP and JavaScript code faster. Get control of your technical debt with real time static ...

They use GPA fro their metrics:
Learn more about their [GPA (grade point average)](http://docs.codeclimate.com/article/150-glossary-gpa)

* * *