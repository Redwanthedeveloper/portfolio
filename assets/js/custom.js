AOS.init();

// skill bar
$(function () {

  $('.circlechart').circlechart();

});
$('.carousel').carousel({
  interval: 10000
})
// var typed = new Typed('#typed', {
//   stringsElement: '#typed-strings'
// });

var typed = new Typed('.typing', {
  strings: ['Font-end Web Developer',
    'Freelancer'
  ],
  typeSpeed: 42,
  backSpeed: 42,
  loop: true,
  showCursor: true,

});


// active on scroll
// Cache selectors
var lastId,
  topMenu = $(".navbar-nav"),
  topMenuHeight = topMenu.outerHeight() + 15,
  // All list items
  menuItems = topMenu.find("a"),
  // Anchors corresponding to menu items
  scrollItems = menuItems.map(function () {
    var item = $($(this).attr("href"));
    if (item.length) { return item; }
  });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function (e) {
  var href = $(this).attr("href"),
    offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
  $('html, body').stop().animate({
    scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function () {
  // Get container scroll position
  var fromTop = $(this).scrollTop() + topMenuHeight;

  // Get id of current scroll item
  var cur = scrollItems.map(function () {
    if ($(this).offset().top < fromTop)
      return this;
  });
  // Get the id of the current element
  cur = cur[cur.length - 1];
  var id = cur && cur.length ? cur[0].id : "";

  if (lastId !== id) {
    lastId = id;
    // Set/remove active class
    menuItems
      .parent().removeClass("active")
      .end().filter("[href='#" + id + "']").parent().addClass("active");
  }
});


// window.onscroll = function() {myFunction()};

// var navbar = document.getElementById("nav-wrapper");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }




