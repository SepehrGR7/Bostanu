// Show navbar on scroll
$(function () {
   $(document).scroll(function () {
      const $nav = $('#scrollNav')
      $nav.toggleClass('show-nav', $(this).scrollTop() > 150)
   })
})

$(function () {
   $(document).scroll(function () {
      $('#mainNav').toggleClass('mainNav-mobile-scroll', $(this).scrollTop() > 50)
      $('.navbar-brand h1').toggleClass('.shrink-logo', $(this).scrollTop() > 50)
   })
})

// Move navbar underline
$(function () {
   let $el, leftPos, newWidth

   const $underline = $('.nav-underline')

   $underline
      // .width($('.current').width())
      .css('left', $('.current').position().left + $('.current').width() / 2 - $underline.width() / 2)
      .data('origLeft', $('.current').position().left + $('.current').width() / 2 - $underline.width() / 2)
   // .data('origWidth', $underline.width())

   $('#mainNav .navbar-nav li').hover(
      function () {
         $el = $(this)
         leftPos = $el.position().left
         // newWidth = $el.parent().width()
         $underline.stop().animate({
            left: leftPos + $el.width() / 2 - $underline.width() / 2,
            // width: newWidth
         })
      },

      function () {
         $underline.stop().animate({
            left: $underline.data('origLeft'),
            // width: $underline.data('origWidth')
         })
      })
})

$(function () {
   let $el, leftPos, newWidth

   const $underline = $('.scroll-nav-underline')

   $underline
      // .width($('.current').width())
      .css('left', $('.scroll-nav-current').position().left + $('.scroll-nav-current').width() / 2 - $underline.width() / 2)
      .data('origLeft', $('.scroll-nav-current').position().left + $('.scroll-nav-current').width() / 2 - $underline.width() / 2)
   // .data('origWidth', $underline.width())

   $('#scrollNav .navbar-nav li').hover(
      function () {
         $el = $(this)
         leftPos = $el.position().left
         // newWidth = $el.parent().width()
         $underline.stop().animate({
            left: leftPos + $el.width() / 2 - $underline.width() / 2,
            // width: newWidth
         })
      },

      function () {
         $underline.stop().animate({
            left: $underline.data('origLeft'),
            // width: $underline.data('origWidth')
         })
      })
})


$(function () {
   let leftPos

   const $underline = $('.projects-underline')

   $underline
      .css('left', $('.active').position().left + $('.active').width() / 2 - ($underline.width() / 2))
      .data('origLeft', $('.active').position().left + $('.active').width() / 2 - $underline.width() / 2)

   $('.projects-nav li').hover(
      function () {
         leftPos = $(this).position().left
         $underline.stop().animate({
            left: leftPos + $(this).width() / 2 - $underline.width() / 2
         })
      },

      function () {
         $underline.stop().animate({
            left: $underline.data('origLeft')
         })
      })
})

// Scroll on click events
$('#home-link').click(function () {
   $('html, body').animate({
      scrollTop: $("#hero").offset().top - 120
   }, 1500);
})

$('#about-link').click(function () {
   $('html, body').animate({
      scrollTop: $("#about").offset().top - 120
   }, 1500);
})


$('.scroller').click(function () {
   $('html, body').animate({
      scrollTop: $("#about").offset().top - 120
   }, 1500);
})


// Hide imgs on click
$('.projects-link').on('click', function () {
   if ($(this).hasClass('active')) {
      return false
   } else {
      $('.projects-item').fadeTo(800, 0)
   }
})
