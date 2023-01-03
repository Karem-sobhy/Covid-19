// Number Counter [Start]
$(window).scroll(testScroll);
$(testScroll());
var viewed = false;

function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return elemBottom <= docViewBottom && elemTop >= docViewTop;
}

function testScroll() {
  if (isScrolledIntoView($(".numbers")) && !viewed) {
    viewed = true;
    $(".count").each(function () {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).data("num"),
          },
          {
            duration: 5000,
            easing: "swing",
            step: function (now) {
              $(this).text(Math.ceil(now).toLocaleString("en"));
            },
          }
        );
    });
  }
}
// Number Counter [End]
// Navbar Changer to active and go up button [Start]
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > 0) {
    $(".navbar").addClass("fixed-top");
    $(".scroll-top").fadeIn(500);
  } else {
    $(".navbar").removeClass("fixed-top");
    $(".scroll-top").fadeOut(500);
  }
});
// Navbar Links to active [Start]
$(document).ready(function () {
  onScroll();
  $(document).on("scroll", onScroll);
});

// Go Top [Start]
$(document).ready(function () {
  $(".scroll-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      "slow"
    );
  });
});
// Go Top [End]

function onScroll(event) {
  var scrollPos = $(document).scrollTop(); //Get the Top position of the window
  $("nav ul li a").each(function () {
    //Go through every anchor link in the nav
    var currLink = $(this); //Save the current anchor
    // console.log($(currLink.attr("href")));
    var Section = $(currLink.attr("href")); //Select the section of this anchor by id which already in href attr in the anchor tag
    // Debug =>
    // console.log("scroll position:" + scrollPos);
    // console.log("current element:" + Section.position().top);
    // console.log("current element height:" + Section.height());
    if (
      Section.position().top <= scrollPos + 250 &&
      Section.position().top + Section.height() > scrollPos
    ) {
      $("nav ul li a").removeClass("active");
      currLink.addClass("active");
    } else {
      currLink.removeClass("active");
    }
  });
}
// Navbar Changer to active [End]
