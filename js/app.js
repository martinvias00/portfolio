function toggleNav() {
  $(".navbar__toggler").toggleClass("change");
  $(".nav-items").stop(true).slideToggle(300);
}

$(document).ready(function () {
  new WOW().init();

  var form = document.getElementById("contact-form");
  var button = document.getElementById("btn-submit");
  var status = document.getElementById("alert__message");

  var alert = $("#alert");

  // Navbar Toggler
  $(".navbar__toggler").click(toggleNav);

  //Scroll Event
  var scrollLink = $(".scroll");
  scrollLink.click(function (e) {
    if ($(window).width() < 950) {
      $(".navbar__toggler").toggleClass("change");
      $(".nav-items").stop(true).slideToggle(300);
    }

    e.preventDefault();
    $("body,html").animate(
      {
        scrollTop: $(this.hash).offset().top - 100,
      },
      1000
    );
  });
});
