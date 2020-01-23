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

$(document).ready(function(){
	$('#drawer-toggle').click(function(){
		$('#nav-icon1').toggleClass('open');
	});
});

$(document).ready(function(){
	$('#drawer-togglem').click(function(){
		$('#nav-icon1m').toggleClass('open');
	});
});


var dropdown2 = document.getElementsByClassName("#drawer ul a");
var i;

for (i = 0; i < dropdown2.length; i++) {
    dropdown2[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}

const btn = document.getElementById('elem');

btn.addEventListener('click', () => window.scrollTo({
  top: 800,
  behavior: 'smooth',
}));



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



$(document).ready(function(){
	$('.dropdown-btn').click(function(){
		$('.dropdown-container').toggleClass('up');
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
    responsive: [
      {
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
     
