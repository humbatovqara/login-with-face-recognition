var i = 0;
var txt = 'Təhlükəsizlik protokollarını SecUP ilə öyrənək!';
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("anim-typewriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}



/* Sticky */
window.onscroll = function () {
  myFunction()
};
let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    document.getElementById("progress").classList.add("progress-top");
  } else {
    navbar.classList.remove("sticky");
    document.getElementById("progress").classList.remove("progress-top");
  }
}

/**/
$(document).ready(function () {
  var getMax = function () {
    return $(document).height() - $(window).height();
  };

  var getValue = function () {
    return $(window).scrollTop();
  };

  if ("max" in document.createElement("progress")) {
    var progressBar = $("progress");

    progressBar.attr({
      max: getMax()
    });

    $(document).on("scroll", function () {
      progressBar.attr({
        value: getValue()
      });
    });

    $(window).resize(function () {
      progressBar.attr({
        max: getMax(),
        value: getValue()
      });
    });
  } else {
    var progressBar = $(".progress-bar"),
      max = getMax(),
      value,
      width;

    var getWidth = function () {
      value = getValue();
      width = (value / max) * 100;
      width = width + "%";
      return width;
    };

    var setWidth = function () {
      progressBar.css({
        width: getWidth()
      });
    };

    $(document).on("scroll", setWidth);
    $(window).on("resize", function () {
      max = getMax();
      setWidth();
    });
  }
});

/*loader*/
$(window).on("load",function(){
  $(".loader-wrapper").fadeOut("slow");
});

/* Toggle switch */
function toggleclick() {
  let checkbox = document.querySelector('input[type="checkbox"]');
  let result = document.getElementById('result');

  if (checkbox.checked) {
    result.innerHTML = "SSL aktivdir";
    result.style.color = "green";
  } else {
    result.innerHTML = "SSL aktiv deyil! Məlumatları daxil edərkən ehtiyatlı olun!";
    result.style.color = "red";
  };
}