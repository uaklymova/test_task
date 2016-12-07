$(document).ready(function() {
    $("ul li ").click(function(e) {
        e.preventDefault();
        $("ul li ").removeClass('active');
        $(this).addClass('active');
    });
    $("#home").click(function(){
        $('#content').load("public/views/home.html");
    });
    $("#profile").click(function(){
        $('#content').load("public/views/profile.html");
    });
    $("#logout").click(function(){
        $('#content').load('public/views/logOut.html');
    });
});
