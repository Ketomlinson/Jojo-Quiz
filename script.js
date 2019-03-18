$(".Giorno, .Mista, .Bruno, .Naracia").hide();



$(".submit").click(function() {
    var age = $("#age").val();
    var guns = $("#guns").val();
    if (age >= 16 && guns === "yes") {
    $(".Giorno, .Mista, .Bruno, .Naracia").hide();
    $(".Mista").show(); 
    } else if (age <= 16 && guns === "yes") {
    $(".Giorno, .Mista, .Bruno, .Naracia").hide();
     $(".Naracia").show();   
    } else if (age <= 16 && guns === "no") {
    $(".Giorno, .Mista, .Bruno, .Naracia").hide();
     $(".Giorno").show();   
    } else if (age >= 16 && guns === "no") {
    $(".Giorno, .Mista, .Bruno, .Naracia").hide();
     $(".Bruno").show(); }
});