
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    var NYTAPIkey = "fd8cba38a91faa288299d44cf74d63de:14:71019947";

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
    
    var street = $("#street").val();
    var city = $("#city").val();
    var address = street + "," + city;
    var streetviewURL = "http://maps.googleapis.com/maps/api/streetview?size=600x300&location=" + address + "";

    console.log(street, city);

    // YOUR CODE GOES HERE!
    
    $body.append('<img class="bgimg" src="' + streetviewURL + '">');

    // NYTimes articles
    //$.getJSON( "http://api.nytimes.com/svc/search/v2/articlesearch.response-format?[q=search term&fq=filter-field:(filter-term)&additional-params=values]&api-key=fd8cba38a91faa288299d44cf74d63de:14:71019947", function( data ) {
      $.getJSON( "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=new+york+times&page=2&sort=oldest&api-key=fd8cba38a91faa288299d44cf74d63de:14:71019947

        ", function( data ) {
      

      var items = [];
      $.each( data, function( key, val ) {
        items.push( "<li id='" + key + "'>" + val + "</li>" );
    });

      $( "<ul/>", {
        "class": "my-new-list",
        html: items.join( "" )
    }).appendTo( "body" );
  })

    return false;
};

$('#form-container').submit(loadData);

loadData();
