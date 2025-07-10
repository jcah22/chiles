document.addEventListener('DOMContentLoaded',()=> {
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel,{
        duration:150,
        dist:-80,
        shift:5,
        padding:5,
        numVisible:5,
        indicators:true,
        noWrap:false,
    

    });
    autoplay();
    function autoplay(){
        $('.carousel').carousel('next');
        setTimeout(autoplay,3000);
    }
   
});

