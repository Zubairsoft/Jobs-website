$(document).ready(function(){

    $("#search").on('keyup',function(){
        var word=$("#search").val().toLowerCase();
        $("#job div").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(word)>-1);

        })

    })
})