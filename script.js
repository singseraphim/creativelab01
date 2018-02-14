$(document).ready(function() {
var submitButton = $("#searchSubmit");
console.log(submitButton);
$("#searchSubmit").click(function(e) {
    e.preventDefault();
    var value = $("#searchInput").val();
    console.log(value);
    var myurl = "https://itunes.apple.com/search?media=podcast&term=" + value;
    console.log(myurl);
    $.ajax({
        url : myurl,
        dataType : "json",
        success : function(json) {
            console.log(json);
            var results = "";
            var size = 10;
            if (json.results.length < 10) {
               size = json.results.length;
            }
            for (var i = 0; i < size; i++) {
                
                results += '<div class = "podResult"><a class = "resImage" href = "' + json.results[i].collectionViewUrl + '"><img src="' + json.results[i].artworkUrl100 +'"></a>'
                results += '<div class = "resultText"><a class = resTitle href = ' + json.results[i].collectionViewUrl +'>' + json.results[i].collectionCensoredName + '</a>';
                results += '<p class = resArtist>' + json.results[i].artistName + '</p>';
                results += '<p class = resInfo> Genre: ' + json.results[i].primaryGenreName + '<br> Episodes: ' + json.results[i].trackCount + '</div></div><br>';
            }
            $("#searchResults").html(results);
        }
    });
});
});


/*
<div id = "searchResults">
<div class = "podresult">
    <a class = "resImage><img src></a>
    <div class = "resultText>
        <a class = "resTitle">
        <p class = "resArtist">
        <p class = "resInfo>
    </resultText>
</podResult>
</searchResults>

<div id = searchResults>
    <div class = podResult>
        <img>
        <text>
    </div>
</div>


*/