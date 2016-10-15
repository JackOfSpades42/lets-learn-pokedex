# Let's Learn Javascript: Pokédex API Demo
A quick demo/playground to learn some jQuery basics,and how to interact with an API

## Installation

If you don't already, plase make sure you've installed [nodejs from here (v4.6.0 or higher is fine)](https://nodejs.org/en/)

You'll also need [git for your Operating System](https://git-scm.com/download/).  You can use a GUI, but I'll be giving setup instructions in CLI

### NPM setup

Once you have the above setup, open a terminal (CMD, git bash, or NODE will all work) and type in the following.  Hit enter after each line and let it run until completion, then start the next

`npm i -g gulp`

`npm i -g gulp-cli`

`npm i -g bower`

This will install bower and gulp globally, and intall the CLI tools for gulp--you'll need those to start the server

### Cloning this repo

Once that's done, create a folder for this repository to be cloned into, and navigate to it with whatever command-line tool you prefer

**Quick Tip!** *If you are having issues moving around in the command line interface, you can hold `shift` and `right click` in the folder, and you'll have an option to `open command window here` to start a terminal in your project folder.  If you installed git bash you can also use the `open git bash here` option as well*

Once in your folder, clone this repo into it using the following command

`git clone https://github.com/ammuench/lets-learn-pokedex.git ./`

Let it run, and then move onto the next step when it's done

### Install packages

Once the repo is cloned, run the following commands (wait until one is done before continuing)

`npm install`

`bower install`

### Run the server!

You're set, to start seeing the demo, run the webserver with the command:

`gulp serve`

It'll start a live webserver that will open up on `localhost:3000` for you.  Any changes you make in the active `/app/` folder will be reflected there




## How to Switch Between "Steps"

If you want to switch and make one of the steps the live step, so you can play around with it, do the following:

1. Kill the gulp server by going to terminal and pressing `ctrl-c` (On windows it may prompt you to end again).
2. Rename the current `app` folder to `app.old` (or whatever, just not `app`)
3. Rename the folder of the step you want to load to `app`
4. Start `gulp serve` again


## CHALLENGES :DogShell:

Check out `CHALLENGES.md` for a full list of challenges to try.

## RESOURCES

jQuery AJAX Docs: http://api.jquery.com/jquery.ajax/

jQuery Effect Docs: https://api.jquery.com/category/effects/

jQuery Event Docs: https://api.jquery.com/category/events/

jQuery Manipulation Docs: https://api.jquery.com/category/manipulation/

Mozilla Dev Network: https://developer.mozilla.org

Pokémon API Docs: https://pokeapi.co/docsv2/
