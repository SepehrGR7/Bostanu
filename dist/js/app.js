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





// <div class="services-cards my-0 my-lg-5 p-5 p-lg-0">
//    <div class="row d-flex justify-content-center">
//       <div class="service-card col-lg text-center py-4 px-5 mx-4 row">
//          <div class="icon-wrapper mx-auto d-flex align-items-center justify-content-center">
//             <i class="fas fa-mobile fa-3x text-info"></i>
//          </div>
//          <h3 class="mt-2 mb-3 text-primary">Mobile Apps</h3>
//          <p class="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos molestias animi velit impedit ex voluptates assumenda dolor fuga praesentium corrupti.</p>
//       </div>
//       <div class="service-card col-lg text-center py-4 px-5 mx-4 row">
//          <div class="icon-wrapper mx-auto d-flex align-items-center justify-content-center">
//             <i class="fas fa-laptop-code fa-3x text-success-dark"></i>
//          </div>
//          <h3 class="mt-2 mb-3 text-primary">Web Development</h3>
//          <p class="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos molestias animi velit impedit ex voluptates assumenda dolor fuga praesentium corrupti.</p>
//       </div>
//       <div class="service-card col-lg text-center py-4 px-5 mx-4 row">
//          <div class="icon-wrapper mx-auto d-flex align-items-center justify-content-center">
//             <i class="fas fa-desktop fa-3x text-warning"></i>
//          </div>
//          <h3 class="mt-2 mb-3 text-primary">Desktop Apps</h3>
//          <p class="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos molestias animi velit impedit ex voluptates assumenda dolor fuga praesentium corrupti.</p>
//       </div>
//    </div>
// </div>