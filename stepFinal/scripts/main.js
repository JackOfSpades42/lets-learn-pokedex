console.log('HTML POKEDEX Final!');

/**
 * FINAL VERSION
 * 
 * Okay, this isn't really final, since there is still a lot of features missing, 
 * but that's where YOU can come in and add new stuff.  I've added a few more points where data is handled, but
 * the rest is up to you.  Check the README.md file for some suggestions on what to do
 */


//Takes the 'types' array from the API response, and assigns the types correctly to the pokemon.
var assignTypes = function (typesArray) {
    //if there is only one type, sets it to type 1 and sets type 2 as (none)
    if (typesArray.length === 1) {
        $('#poketype1').html(typesArray[0].type.name);
        $('#poketype2').html('(none)');
    } else {
        //iterate through the types and assigns them if there are multiple types
        for (var i = 0, len = typesArray.length; i < len; i++) {
            if (typesArray[i].slot === 1) {
                $('#poketype1').html(typesArray[i].type.name);
            } else {
                $('#poketype2').html(typesArray[i].type.name);
            }
        }
    }
}

$('#submitSearch').click(function () {
    var searchValue = $('#searchBox').val();
    searchValue = searchValue.toLowerCase();
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
        assignTypes(data.types)
        $('#pokemonSprite').attr('src', data.sprites.front_default);
    })
    .fail(function(data){
        /** 
         * For simplicity sake, we'll just have errors pass back a note to the user in an alert
         */
        alert('Error!  Invalid pokemon name or id');
        /**
         * go try to search for pokemon 9999999 now, and you should get a proper error
         */
    });;
});
