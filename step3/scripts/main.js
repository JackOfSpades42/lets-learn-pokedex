console.log('HTML POKEDEX STEP THREE!');

/**
 * Step Three:
 * Adding ajax, working with JSON
 */

/**
 * Lets start with a static path, we'll shift to dynamic shortly
 */
$('#submitSearch').click(function () {
    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon/1/",
        type: 'GET',
        dataType: 'json'
    }).done(function (data) {
        console.log(data); //Should log out a large javascript object about bulbasaur
    });
});

/** 
 * If everything went right, there should be a quick delay, and then 
 * an object should be logged out to the developer console in your browser 
 * (you can access it with CTRL-SHIFT-I or hitting "Inspect" from the right click menu).  
 * 
 * When you're ready, comment out the above, and unomment the next step'
 */


/**
 * You should notice the nested structure of the object you created.
 * All the names on listed are the Objects "keys".
 * We set our response to come back as "data" in the ajax promise resolve (the 'done')
 * 
 * We can access different values for different keys with dot-notation.  So here we now access the pokemon's names
 * by accessing data.name, and their number by data.id
 * 
 * Let's set those in the dom like we did with the search value in step 2
 */
// $('#submitSearch').click(function () {
//     $.ajax({
//         url: "https://pokeapi.co/api/v2/pokemon/bulbasaur/",
//         type: 'GET',
//         dataType: 'json'
//     }).done(function (data) {
//         console.log(data); //Should log out a large javascript object about bulbasaur
//         console.log(data.name); //Should log out 'bulbasaur'
//         console.log(data.id); //Should log out '1'
//         $('.pokename').html(data.name); //Should set the name values to 'bulbasaur'
//         $('.pokenumber').html(data.id); //Should set the pokemon number value to '1'
//     });
// });
