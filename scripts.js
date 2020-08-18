$('#unicorn').mouseover(function(){
    $(this).css("cursor", "pointer");
    $(this).animate({
        width: "150"
    })
})

$('#unicorn').mouseout(function(){
    $(this).css("cursor", "pointer");
    $(this).animate({
        width: "100"
    })
})


$('.single-item').slick({
    dots:true
});
