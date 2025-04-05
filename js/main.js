$(function () {
    $(".card-slider").slick({
      dots: false,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow:
        '<button type="button" class="card-slider-prev"><img src="images/arrow-left.svg" alt=""></button>',
      nextArrow:
        '<button type="button" class="card-slider-next"><img src="images/arrow-right.svg" alt=""></button>',
    });

    $(".section-slider__inner").slick({
        dots: false,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow:
          '<button type="button" class="section-slider-prev"><img src="images/arrow-left.svg" alt=""></button>',
        nextArrow:
          '<button type="button" class="section-slider-next"><img src="images/arrow-right.svg" alt=""></button>',
        responsive: [
            {
              breakpoint: 450,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
        ]
      });

    $('.tab').on('click', function(e){
        e.preventDefault();

        $($(this).siblings()).removeClass('tab--active');
        $($(this).closest('.card-info__fulltech-top').siblings().find('div')).removeClass('tabs-content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');
    });

    $('.section__title').on('click', function(){
        $('.section__content-box').removeClass('section__content-box--active');
        $($(this).siblings()).addClass('section__content-box--active');
    });

    $(window).on("load", () => {
        const [button] = document.getElementsByClassName("section-request__checkbox-input");
    
        button.addEventListener("click", () => {
            button.classList.toggle("checked");
        });
    });
    
});