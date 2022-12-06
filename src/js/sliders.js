$('.block_5-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    // centerMode: true,
    arrows: true,
    responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 321,
          settings: {
            
            slidesToShow: 1
          }
        }
      ],
    prevArrow: '<button class="slider__prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
    nextArrow: '<button class="slider__next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>'
  });

  $('.block-4__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    arrows: true,
    responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 321,
          settings: {
            
            slidesToShow: 1
          }
        }
      ],
    prevArrow: '<button class="slider__prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
    nextArrow: '<button class="slider__next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>'
  });
  $('.header-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // centerMode: true,
    // variableWidth: true,
    arrows: true,
    adaptiveHeight: true,
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            dots: true,
            arrows: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            
            dots: true,
            arrows: false,
          }
        }
      ],
    prevArrow: '<button class="header-slider__prev header-slider__btn"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
    nextArrow: '<button class="header-slider__next header-slider__btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>'
  });
 
  $('.slider__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    // centerMode: true,
    // variableWidth: true,
    arrows: true,
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            
            slidesToShow: 2
          }
        },
        {
          breakpoint: 520,
          settings: {
            
            slidesToShow: 1
          }
        }

      ],
    prevArrow: '<button class="slider__prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
    nextArrow: '<button class="slider__next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>'
  });
  
      
