
const target = document.querySelectorAll('.bloco');
const animationClass = 'animate';

function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight *3)/4);
    
    target.forEach(function(element){
        if((windowTop) > element.offsetTop){
            element.classList.add(animationClass);
        } else {
            element.classList.remove(animationClass);
        }        
       
    })
}

window.addEventListener('scroll', function(){
    animeScroll();
})


$('.single-item').slick({
    dots:true,
    arrows:false
});


