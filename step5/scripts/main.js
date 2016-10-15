console.log('HTML POKEDEX STEP FIVE!');

/**
 * Step Five:
 * Error handling and final touches
 */

/**
 * Sanitizing inputs
 * 
 * You may have noticed that if you use a capital letter in your pokemon name, 
 * that you get an error and no data is returned.  The API is case sensitive and all values
 * must either be a number, or a lowercase string.  Lets fix this
 */

$('#submitSearch').click(function () {
    var searchValue = $('#searchBox').val(); 
    /**
     * javascript has a built in  "toLowerCase" method for any string variables
     * Since we pass our numbers as part of a string, and not as a number value, they won't be affected'
     * Lets use it here:
     */
    searchValue = searchValue.toLowerCase(); //Sets searchValue to it's lowercase value
    var apiRoot = 'https://pokeapi.co/api/v2/pokemon/'; 
    var apiURL = apiRoot + searchValue; 

    $.ajax({
        url: apiURL,
        type: 'GET',
        dataType: 'json'
    }).done(function (data) {
        console.log(data); 
        console.log(data.name); 
        console.log(data.id); 
        $('.pokename').html(data.name);
        $('.pokenumber').html(data.id);
        $('#pokemonSprite').attr('src', data.sprites.front_default);
    });
});

/** 
 * Error handling
 * 
 * So, what happens if a user gives a value for a nonexistant pokemon?  
 * Right now it'll just fail silently, and pass an error in the DOM because we couldn't 
 * make the network call to an API endpoint that doesn't exist
 * 
 * Luckily, jQuery's (and many other libraries') ajax promise returns several stages
 *  done, fail, always (http://api.jquery.com/jquery.ajax/)
 * 
 * done runs when the call returns with a successful response
 * fail runs when the call returns with a unsuccessful response
 * always will run every time the call is finished
 * 
 * so we'll add a new case in our logic flow to catch errors and handle them appropriately
 * 
 * (Make sure to comment out the block above, and uncomment below)
 */

// $('#submitSearch').click(function () {
//     var searchValue = $('#searchBox').val(); 
//     /**
//      * javascript has a built in  "toLowerCase" method for any string variables
//      * Since we pass our numbers as part of a string, and not as a number value, they won't be affected'
//      * Lets use it here:
//      */
//     searchValue = searchValue.toLowerCase(); //Sets searchValue to it's lowercase value
//     var apiRoot = 'https://pokeapi.co/api/v2/pokemon/'; 
//     var apiURL = apiRoot + searchValue; 

//     $.ajax({
//         url: apiURL,
//         type: 'GET',
//         dataType: 'json'
//     })
//     .done(function (data) {
//         console.log(data); 
//         console.log(data.name); 
//         console.log(data.id); 
//         $('.pokename').html(data.name);
//         $('.pokenumber').html(data.id);
//         $('#pokemonSprite').attr('src', data.sprites.front_default);
//     })
//     .fail(function(data){
//         /** 
//          * For simplicity sake, we'll just have errors pass back a note to the user in an alert
//          */
//         alert('Error!  Invalid pokemon name or id');
//         /**
//          * go try to search for pokemon 9999999 now, and you should get a proper error
//          */
//     });
// });
