$(function(){
  var mixer = mixitup('.directions__body-list');

  $('.directions__filter-btn').on('click', function () {
    $('.directions__filter-btn').removeClass('directions__filter-btn--active')
    $(this).addClass('directions__filter-btn--active')
  })

  $('.team__slider').slick({
    arrows: false,
    slidesToShow: 4,
    infinite: true,
    draggable: false,
    WaitForAnimate:false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  })

  $('.team__arrows-prev').on('click', function(e){
    e.preventDefault()
    $('.team__slider').slick('slickPrev')
  })
  $('.team__arrows-next').on('click', function(e){
    e.preventDefault()
    $('.team__slider').slick('slickNext')
  })

  $('.testimonials__slider').slick({
    arrows: false,
    dots: true,
    appendDots: $('.testimonals__dots')
  })
  $('.testimonials__prev').on('click', function(e){
    e.preventDefault()
    $('.testimonials__slider').slick('slickPrev')
  })
  $('.testimonials__next').on('click', function(e){
    e.preventDefault()
    $('.testimonials__slider').slick('slickNext')
  })

  $('.program__accord-link').on('click', function (e)
  {
    e.preventDefault()
    if($(this).hasClass('program__accord-link--active')){
    $(this).removeClass('program__accord-link--active')
    $(this).children('.program__accord-text').slideUp()}
    else{
      $('.program__accord-link').removeClass('program__accord-link--active')
      $('.program__accord-text').slideUp()
      $(this).addClass('program__accord-link--active')
    $(this).children('.program__accord-text').slideDown()  
    }
    })

    //-----------ЯКОРЬ----------
    $(".header__menu-list a, header__top-btn, .footer__go-top, .button").on("click", function(e) {
      e.preventDefault()
      var id = $(this).attr('href'),
      top = $(id).offset().top
      $('body,html').animate({ scrollTop: top }, 1000)
    })

    // var $page = $('html, body');
    // $('a[href*="#"]').click(function() {
    //     $page.animate({
    //         scrollTop: $($.attr(this, 'href')).offset().top -100
    //     }, 1000);
    //     return false;
    // });

    //--------БУРГЕР---------
    setInterval(() => {
      if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false){
      $('.burger').addClass('burger--follow')
      } else {
        $('.burger').removeClass('burger--follow')
      }
    }, 0)

    $('.burger, .overlay, .header__top a').on('click', function (e) {
      e.preventDefault()
      $('.header__top').toggleClass('header__top--open')
      $('.overlay').toggleClass('overlay--show')
      $('.burger').toggleClass('burger--active')
    })

    $('.footer__top-title--slide').on('click', function () {
      $(this).next().slideToggle()
    })

    //-------------------трикутники на 550-----------------

    $('.footer__top-title--slide').on('click', function (e)
    {
      e.preventDefault()
      if($(this).hasClass('footer__top-title--active'))
      $(this).removeClass('footer__top-title--active')
      else{
        $('.footer__top-title--slide').removeClass('footer__top-title--active')
        $(this).addClass('footer__top-title--active') 
      }
      })

})