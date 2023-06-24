let sound;
$(function() {

    $('.header__btn').on('click', function() {
      $('.rightside-menu').removeClass('rightside-menu--close');
    });

    $('.rightside-menu__close').on('click', function() {
      $('.rightside-menu').addClass('rightside-menu--close');
    });
  
    $('.header__btn-menu').on('click', function() {
      $('.menu').toggleClass('menu--open');
    });
  
    if ($(window).width() < 651) {
      $('.works-path__item--measurements').appendTo($('.works-path__items-box'));
    }
  
    $(".rightside-menu__logo").on({
      mouseenter: function(){
        
        if (!sound) {
          sound = new Audio('hapi-hapi-hapi.mp3');
        }
        sound.play();
      },
      mouseleave: function(){
        if (sound) {
          sound.pause();
          sound.currentTime = 0;
        }
      }
    });
    
    $('.top__slider').slick({
      dots: true,
      arrows: false,
      fade: true,
      autoplay: true
    });
  
    $('.contact-slider').slick({
      slidesToShow: 10,
      slidesToScroll: 10,
      dots: true,
      arrows: false,
      responsive: [{
          breakpoint: 1700,
          settings: {
            slidesToShow: 8,
            slidesToScroll: 8
          }
        },
        {
          breakpoint: 1512,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 6
          }
        },
        {
          breakpoint: 1180,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 460,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
      ]
    });
  
    $('.article-slider__box').slick({
      prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrowleft"><img src="images/prev.svg" alt="arrow"></button>',
      nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrowright"><img src="images/next.svg" alt="arrow"></button>'
    });
  
    $(function() {
        $('input[id="date"]').on('input', function() {
          date($(this));
        });
      
        function date(input) {
          var clear = input.val().replace(/\D/g, '');
          var day = clear.slice(0, 2);
          var month = clear.slice(2, 4);
          var year = clear.slice(4, 8);
          var final = day + '.' + month + '.' + year;
          input.val(final);
        }
      });
  
      $(function() {
        $('input[id="phone"]').on('input', function() {
          phone($(this));
        });

    function phone(input) {
      var clear = input.val().replace(/\D/g, '');
      var first = clear.slice(1, 4);
      var second = clear.slice(4, 7);
      var third = clear.slice(7, 11);
      var final = '+7 (' + first + ') ' + second + '-' + third;
      input.val(final);
    }
    });
  
    function submit() {
      alert("The ambulance will arrive in 15 minutes.");
      $('#button').text('Called');
      $('#button').removeClass('btn-dark').addClass('btn-success');
    }
  $(document).on('click', '#button', submit);

  function submit2() {
    alert("Your mail is sent!");
    $('#button2').text('Sent');
    $('#button2').removeClass('btn-dark').addClass('btn-success');
  }
$(document).on('click', '#button2', submit2);

function submit3() {
  alert("You are succesfully registered!");
  $('#button3').text('Registered');
  $('#button3').removeClass('btn-dark').addClass('btn-success');
}
$(document).on('click', '#button3', submit3);

});