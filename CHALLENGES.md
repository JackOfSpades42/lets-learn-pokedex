# Challenges!

Use this list as direction for learning new things based off some core concepts laid out and built up in this repo.

The challenges will be left fairly open ended, as I believe the one of the best way to learn in these scenarios is to create your own solution instead of following a strict guide, as it encourages you to read docs, look at other implementations, and evaluate what works best for you.  That being said I'll leave some hints/suggestions for each challenge so there is some direction in case you get stuck :DogShell:

## How to do these challenges?

I suggest you fork this repository, using the FORK button in the corner of github--then cloning your own repository, so you can make and commit changes so you can show it off later!

If you're so inclined, you can also look into creating branches within git for each challenge.   [More info here](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)

-----

# Challenge 1: Shiny Sprite on Mouseover

This one should be pretty straightforwards--as the API returns tons of sprite URLs.  Set up the pokedex that mousing over the default sprite will change it to the Shiny Sprite, and then mousing off will return it to the default sprite!

### Risks/Pitfalls

* Lag if firing off a separate call on Mouseover
* Lag when switching image sources
* Mouseover/Mouseleave events not firing correctly

### Suggestions

* Look into jQuery events
* Think about caching data to local variables for performance

# Challenge 2: Loading Indicators, Graceful Errors

The API calls sometimes take a second or two to run.  Add an interim loading state so that the user knows that something is occuring after hitting the 'Submit' button.

Also, our 'Alert' way of handling errors is really unsophisticated.  Try to add some way of letting the user gracefully know that there was an error with their request

### Risks/Pitfalls

* Loading time is variables
* No predefined error/loading elements
* Making sure error/loading is properly cleared on success

### Suggestions

* Look into doing hide/show for states
* Timeouts can be helpful for MOCKING a load time if you need to test it

# Challenge 3: Pokemon Head-to-Head Matchup

Lets add some new fuctionality!  Allow a mode for users to compare two pokemon head to head if they want to.  This means allowing two pokemon to be loaded side-by-side to compare info and stats.  Also, try and build out logic to compare the type matchup to see which Pokemon is better in a fight!

### Risks/Pitfalls

* Handling two distinct data sets
* Scoping data to be updated in only one area, and not both

### Suggestions

* You'll need two distinct events two handle data, but can share one AJAX call if you wish
* You'll need to write your own custom logic to handle type comparisons, it'd be best to build a function that accepts types as parameters.