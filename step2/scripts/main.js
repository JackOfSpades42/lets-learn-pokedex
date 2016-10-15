console.log('HTML POKEDEX STEP TWO!');

/**
 * Step Two:
 * Basic jQuery funcionality--uncomment each block descending 
 * to see some basic jQuery fucntionality and how we're gonna 
 * build it up to make an interactive pokedex
 */

/**
 * Basic event binding
 * We use click as a basic event binding on the "Submit" button.  
 * We pass an alert to test our fucntionality
 * (Uncomment this block only, and comment the rest to see it work)
 */

// $('#submitSearch').click(function(){
//     alert('Clicked!');
// });

/**
 * Fetching data from the DOM, 
 * Now we grab the value in the search box and assign it to anything with class 'pokename'
 * which happens to be the large title on the left, and the name result field
 */
$('#submitSearch').click(function(){
    $('.pokename').html($('#searchBox').val());
});
