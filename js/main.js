let show_sign_up=document.getElementById("show-sign");
let hide_login=document.getElementById("login");
// search by using jquery
$(document).ready(function(){

    $("#search").on('keyup',function(){
        var word=$("#search").val().toLowerCase();
        $("#job div").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(word)>-1);

        })

    })
    // show sing up page
    $("#sign-up").on('click',function(){
        $(show_sign_up).css("display","block");
        $(hide_login).css("display","none");
        
    })
    $("#show-exper").on('click',function(){
        $("#exper-hide").css("display","none");


    })





})
//download cv
function download(){

    window.open("../cive.pdf");
}

