var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";

    }
  });
}





$(document).ready(function () {
  $('#drawer-toggle').click(function () {
    $('#nav-icon1').toggleClass('open');
  });
});


$(document).ready(function () {
  $('#drawer-togglem').click(function () {
    $('#nav-icon1m').toggleClass('open');
  });
});



var dropdown1 = document.getElementsByClassName("dropdown-btn-m");
var i;

for (i = 0; i < dropdown1.length; i++) {
  dropdown1[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}


$(".rotate").click(function () {
  $(this).toggleClass("down");
})

$(document).ready(function () {
  $('.dropdown-btn').click(function () {
    $('.dropdown-container').toggleClass('up');
  });
});

$(document).ready(function () {
  $('#drawer-toggle').click(function () {
    $('.blur').toggleClass('blurry');
  });
});

$(document).ready(function () {
  $('#drawer-togglem').click(function () {
    $('.blur').toggleClass('blurry');
  });
});


$(document).ready(function () {
  $('.dropdown-btn-m').click(function () {
    $('.dropdown-container').toggleClass('up');
  });
});

$(document).ready(function () {
  $('.dropdown-btn').click(function () {
    $('.roter').toggleClass('ned');
  });
});

$(document).ready(function () {
  $('.dropdown-btn-m').click(function () {
    $('.roter').toggleClass('ned');
  });
});


$('.responsive').slick({
  dots: false,
  infinite: true,
  prevArrow: '<button class="slide-arrow prev-arrow"></button>',
  nextArrow: '<button class="slide-arrow next-arrow"></button>',
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1224,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        centerMode: false

      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.getElementById("logo1").style.width = "200px";
    document.getElementById("logo2").style.width = "200px";
    document.getElementById("nav-icon1").style.margin = "60px 70px 30px auto";
   
  } else {
    document.getElementById("logo1").style.width = "400px";
    document.getElementById("logo2").style.width = "300px";
    document.getElementById("nav-icon1").style.margin = "70px 90px 50px auto";
   
  }
}


