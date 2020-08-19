$('#unicorn').mouseover(function(){
    $(this).css("cursor", "pointer");
})

$('#unicorn').click(function(){
    $(this).fadeOut(150);
    $(this).fadeIn(150);
})

$('.single-item').slick({
    dots:true
});


