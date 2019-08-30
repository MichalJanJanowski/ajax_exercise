$(function(){
    $("#submit").on("click", function(){
        let $searchTerm = ($("#search").val().replace(" ", "+").toLowerCase())
        let xhr = $.get(`http://api.giphy.com/v1/gifs/search?q=${$searchTerm}&api_key=UweD0XFQzINuOAQXpvnZIDpBEEDkDKAf`)
        let random = Math.floor(Math.random() * 25)
        xhr.done(function(data){
            var $newImg = $("<img>", {
                src:`${data.data[random].images.original.url}`,
            });
            $("section").append($newImg)
        });
    })
    $("#clear").on("click", function(){
        $("section").empty()
    })
})