window.addEventListener('scroll', function () {
  var menu = document.querySelector('.header');
  menu.classList.toggle('sticky', window.scrollY > 0);
});

$("a[href^='#']").click(function (e) {
  e.preventDefault();

  var position = $($(this).attr('href')).offset().top;

  $('body, html').animate({
    scrollTop: position,
  });
});
