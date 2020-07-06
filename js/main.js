$(function () {
    $('.carousel').carousel({
        interval:5000,
        pause:null
    })
    
    $('.testmonials .carousel').carousel({
        interval:1,
        pause:null
    })
    // $('.options span').on('click', function () {
    //     $('.color-option').toggle();
    // });
        $(".counter").counterUp({
            time: 3000,
        });
    $(".options span").on('click', function () {
        if ($('.options').css('left') === '-200px') {
            $('.options').css('left', '0');
        } else {
            $('.options').css('left', '-200px');
        }
    });

    $(".toTop").on('click', function () {
        $('html, body').animate({
            scrollTop:0
        }, 400);
    });
    $('.color-option ul li')
        .eq(1).css('backgroundColor', 'rgb(249, 223, 38)').end()
        .eq(2).css('backgroundColor', '#03A9F4').end()
        .eq(3).css('backgroundColor', '#F44336').end()
        .eq(4).css('backgroundColor', '#4CAF50').end()
        .eq(0).css('backgroundColor', '#009688').end()
        
        // set defult style 

      $('.navbar-inverse .navbar-nav > .active > a, .navbar-inverse .navbar-nav > .active > a:hover, .navbar-inverse .navbar-nav > .active > a:focus, .dropdown-menu > li > a:hover, .dropdown-menu > li > a:focus, .dropdown-menu .divider, .options span, .toTop')
      .css('backgroundColor', localStorage.getItem('col') || '#009688');

      $(".navbar-inverse .navbar-brand span, section.about span, .testmonials span, .team .person h4, .footer h3, .copyright span")
      .css('color', localStorage.getItem('col') || '#009688');

    $('.color-option ul li').click(function () {
      localStorage.setItem('col', $(this).attr('data-color'))
      $('.navbar-inverse .navbar-nav > .active > a, .navbar-inverse .navbar-nav > .active > a:hover, .navbar-inverse .navbar-nav > .active > a:focus, .dropdown-menu > li > a:hover, .dropdown-menu > li > a:focus, .dropdown-menu .divider, .options span, .toTop')
      .css('backgroundColor', localStorage.getItem('col'));
      $(".navbar-inverse .navbar-brand span, section.about span, .testmonials span, .team .person h4, .footer h3, .copyright span")
      .css('color', localStorage.getItem('col'));
    });
    
});
window.onload = function() {

    if (window.innerWidth > 767) {

      if (window.pageYOffset >= 900) {

          document.querySelector(".toTop").style.display = "block";

      } else {

          document.querySelector(".toTop").style.display = 'none';

      };

  } else {

    if (window.pageYOffset >= 1200) {

      document.querySelector(".toTop").style.display = "block";

    } else {

      document.querySelector(".toTop").style.display = "none";

    }
  }
}
  window.onscroll = function() {

    if (window.innerWidth > 767) {

      if (window.pageYOffset >= 900) {

          document.querySelector(".toTop").style.display = "block";

      } else {

          document.querySelector(".toTop").style.display = 'none';

      };

  } else {

    if (window.pageYOffset >= 1200) {

      document.querySelector(".toTop").style.display = "block";

    } else {

      document.querySelector(".toTop").style.display = "none";

    }
  }

  };
  window.onresize = function () {

    if (window.innerWidth > 767) {

      if (window.pageYOffset >= 900) {

          document.querySelector(".toTop").style.display = "block";

      } else {

          document.querySelector(".toTop").style.display = 'none';

      };

  } else {

    if (window.pageYOffset >= 1200) {

      document.querySelector(".toTop").style.display = "block";

    } else {

      document.querySelector(".toTop").style.display = "none";

    }
  }
}