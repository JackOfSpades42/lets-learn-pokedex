console.log('HTML POKEDEX STEP FOUR!');

/**
 * Step Four:
 * Bringing it all together
 */


/** 
 * Accepting user input
 * 
 * According to the docs for pokeapi (http://pokeapi.co/docsv2/#pokemon)
 * the pokemon endpoint takes either a name or ID passed in the path after /pokemon/
 * 
 * So lets have our ajax call fetch values for what the user puts in the search box, like we had in step 2.
 * We'll accept both name and number, so if you type in 25, you'll get Pikachu--meanwhile if you type in 'Charmader', it'll 
 * output that his number is '4'
 */
$('#submitSearch').click(function () {
    var searchValue = $('#searchBox').val(); //should save to whatever is in the search box
    var apiRoot = 'https://pokeapi.co/api/v2/pokemon/'; //the root url of our api
    var apiURL = apiRoot + searchValue; //Joining our two string values here to make a full url!

    $.ajax({
        url: apiURL,
        type: 'GET',
        dataType: 'json'
    }).done(function (data) {
        console.log(data); //Should log out a large javascript object about whatever pokemon, as long as it matches
        console.log(data.name); //Should log out the pokemons name
        console.log(data.id); //Should log out the pokemons id
        $('.pokename').html(data.name);
        $('.pokenumber').html(data.id); 
    });
});

/** 
 * Awesome!  Your pokedex works now!
 * 
 * Lets add something cool though--lets have it update the image to match the 
 * pokemon you searched for--since pokeapi provides us URLs to sprites!
 * 
 * (Comment the above and uncomment below to continue)
 */

// $('#submitSearch').click(function () {
//     var searchValue = $('#searchBox').val(); //should save to whatever is in the search box
//     var apiRoot = 'https://pokeapi.co/api/v2/pokemon/'; //the root url of our api
//     var apiURL = apiRoot + searchValue; //Joining our two string values here to make a full url!

//     $.ajax({
//         url: apiURL,
//         type: 'GET',
//         dataType: 'json'
//     }).done(function (data) {
//         $('.pokename').html(data.name);
//         $('.pokenumber').html(data.id);
//         /**
//          * jQuery lets you set HTML attributes as well--so we'll go ahead and 
//          * edit the 'src' attribute of the image to point at the URL provded by the api
//          */
//         $('#pokemonSprite').attr('src', data.sprites.front_default);
//     });
// });
