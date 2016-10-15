console.log('HTML POKEDEX STEP TWO!');

/**
 * Step Two:
 * Basic jQuery funcionality--uncomment each block descending 
 * to see some basic jQuery fucntionality and how we're gonna 
 * build it up to make an interactive pokedex
 */

/**
 * Basic event binding
 * We use the click event listener to trigger an action when an event occurs.  jQuery has built 
 * in event listeners that you can attach to jQuery objects (any dom element/elements captured with the $ selector).
 * Here we attach the click event listener, .click(), to our Search Submit button.  We then pass a function to the 
 * click listener method to executed whenenver the client side registers a click on that button.
 * 
 * We'll have it pass a little alert just to let us know it's working 
 */

$('#submitSearch').click(function(){
    alert('Clicked!');
});

/** 
 * jQuery has a massive amount of events built in that you can listen for and bind logic to.  
 * To see a full list check here:
 * https://api.jquery.com/category/events/
 */


/**
 * DOM Manipulation
 * 
 * So, in addition to event listeners, jQuery also provides a bunch of helpful 
 * methods for DOM Manipulation
 * 
 * Here we're going to use two of them to build up the function executed on click to 
 * set the search value as the pokemon name on the page.
 * 
 * Working from the inside out--we will use the '.val()' method to get the value of the 
 * searchBox input--which checks to see what's been typed inside the input box.  
 * 
 * Then we take that, and use the '.html()' method to set it as the value of all elements with
 * class name 'pokename' in the DOM.  The '.html()' method replaces all the inner HTML of an 
 * element with a given value.  Since all the pokename elements we have are bottom-level (no children)
 * elements that just have text, we use it to set the text of our H1 on the left, and our Name DL on the right
 * of the pokedex
 * 
 * 
 * A full list of jQuery's data Manipulation events can be found here: https://api.jquery.com/category/manipulation/
 * 
 * (Uncomment this block below, and comment the block above to see it work)
 */
// $('#submitSearch').click(function(){
//     $('.pokename').html($('#searchBox').val());
// });
