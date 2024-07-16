///<reference types="../@types/jquery" />;

const asideWidth = $("aside").outerWidth();
const counterOffset = $("#counter").offset().top;
const time = new Date().getDay();
$(".open").on("click", function () {
  $("aside").css("transform", "translateX(0)");
  $(".open").css("transform", `translateX(${asideWidth}px)`);
  $(".hero-section h1").css("transform", `translateX(${asideWidth / 2}px)`);
  $(".hero-section p").css("transform", `translateX(${asideWidth / 2}px)`);
});

$(".close-btn").on("click", function () {
  $("aside").css("transform", "translateX(-100%)");
  $(".open").css("transform", `translateX(0px)`);
  $(".hero-section h1").css("transform", `translateX(0px)`);
  $(".hero-section p").css("transform", `translateX(0px)`);
});

$(".singer h3").on("click", function () {
  $(".singer p").slideUp(500);
  if ($(this).siblings("p").css("display") === "block") {
    $(this).siblings("p").slideUp(500);
  } else {
    $(this).siblings("p").slideDown(500);
  }
});

$(`aside a[href ^="#"]`).on("click", function () {
  const eleId = $(this).attr("href");
  const sectionOffset = $(eleId).offset().top;
  $("html, body").animate({ scrollTop: sectionOffset }, 3000);
});
let seconds = parseInt(localStorage.getItem("seconds")) || 0;
let minutes = parseInt(localStorage.getItem("minutes")) || 0;
let hours = parseInt(localStorage.getItem("hours")) || 0;
let days = parseInt(localStorage.getItem("days")) || 0;

function updateDisplay() {
  $(".seconds .time span").html(seconds);
  $(".minutes .time span").html(minutes);
  $(".hours .time span").html(hours);
  $(".days .time span").html(days);
}

function counter() {
  updateDisplay();

  seconds--;
  if (seconds < 0) {
    seconds = 59;
    minutes++;
  }
  if (minutes > 59) {
    minutes = 0;
    hours++;
  }
  if (hours > 23) {
    hours = 0;
    days++;
  }

  localStorage.setItem("seconds", seconds);
  localStorage.setItem("minutes", minutes);
  localStorage.setItem("hours", hours);
  localStorage.setItem("days", days);

  updateDisplay();
}

setInterval(counter, 1000);

$("textarea").on("input", function () {
  let remaining = 100 - $(this).val().length;

  if (remaining <= 0) {
    $("#char-counter").html("Your available characters have finished");
  } else {
    $("#char-counter").html(remaining);
  }
});
