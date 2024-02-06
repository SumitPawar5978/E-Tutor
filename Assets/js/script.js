$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><i class="fa-solid fa-arrow-right"></i></button>',
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="fa-solid fa-arrow-left"></i></button>',
    responsive: [{
        breakpoint: 800,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 1
        }
    }, 
    {
        breakpoint: 1200,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1
        }
    },    
        {
        breakpoint: 450,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 400,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
    ]
});