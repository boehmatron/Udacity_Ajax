
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
    
    var nytimesurl = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + city + '&sort=newest&api-key=fd8cba38a91faa288299d44cf74d63de:14:71019947";

    $.getJSON(nytimesurl, function( data ) {

        $nytHeaderElem.text("New York Times Articles About " + city);

        articles = data.response.docs;

        for (var i = 0; i < articles.length; i++){
            var article = articles[i];
            $nytElem.append('<li class="article">' + '<a href="'+article.web_url+'">'+article.headline.main+'</a>'+'<p>' + article.snippet + '</p>' + '</li>');
        }
    })
    .error(function() {
        $nytHeaderElem.text("New York Times Articles Could Not Be Loaded.");
    });

    return false;
}

$('#form-container').submit(loadData);

loadData();
