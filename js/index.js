

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
$(window).load(function () {
  $(".trigger_popup_fricc").click(function(){
     $('.hover_bkgr_fricc').show();
  });

  $('.popupCloseButton').click(function(){
      $('.hover_bkgr_fricc').hide();
  });
});

$(window).load(function () {
  $(".trigger_popup_fricc1").click(function(){
     $('.hover_bkgr_fricc1').show();
  });
  $('.popupCloseButton1').click(function(){
      $('.hover_bkgr_fricc1').hide();
  });
});
$(window).load(function () {
  $(".trigger_popup_fricc3").click(function(){
     $('.hover_bkgr_fricc3').show();
  });

  $('.popupCloseButton3').click(function(){
      $('.hover_bkgr_fricc3').hide();
  });
});
$(window).load(function () {
  $(".trigger_popup_fricc2").click(function(){
     $('.hover_bkgr_fricc2').show();
  });

  $('.popupCloseButton2').click(function(){
      $('.hover_bkgr_fricc2').hide();
  });
});
$(window).load(function () {
  $(".trigger_popup_fricc4").click(function(){
     $('.hover_bkgr_fricc4').show();
  });
  $('.popupCloseButton4').click(function(){
      $('.hover_bkgr_fricc4').hide();
  });
});
$(window).load(function () {
  $(".trigger_popup_fricc5").click(function(){
     $('.hover_bkgr_fricc5').show();
  });
  $('.popupCloseButton5').click(function(){
      $('.hover_bkgr_fricc5').hide();
  });
});
$(window).load(function () {
  $(".trigger_popup_fricc6").click(function(){
     $('.hover_bkgr_fricc6').show();
  });

  $('.popupCloseButton6').click(function(){
      $('.hover_bkgr_fricc6').hide();
  });
});

$(window).load(function () {
  $(".trigger_popup_fricc7").click(function(){
     $('.hover_bkgr_fricc7').show();
  });

  $('.popupCloseButton7').click(function(){
      $('.hover_bkgr_fricc7').hide();
  });
});

$(window).load(function () {
  $(".trigger_popup_fricc8").click(function(){
     $('.hover_bkgr_fricc8').show();
  });
  $('.popupCloseButton8').click(function(){
      $('.hover_bkgr_fricc8').hide();
  });
});

$(window).load(function () {
  $(".trigger_popup_fricc9").click(function(){
     $('.hover_bkgr_fricc9').show();
  });
  
  $('.popupCloseButton9').click(function(){
      $('.hover_bkgr_fricc9').hide();
  });
});
$(window).load(function () {
  $(".trigger_popup_fricc10").click(function(){
     $('.hover_bkgr_fricc10').show();
  });
  
  $('.popupCloseButton10').click(function(){
      $('.hover_bkgr_fricc10').hide();
  });
});
$(window).load(function () {
  $(".trigger_popup_fricc11").click(function(){
     $('.hover_bkgr_fricc11').show();
  });
  
  $('.popupCloseButton11').click(function(){
      $('.hover_bkgr_fricc11').hide();
  });
});
$(window).load(function () {
  $(".trigger_popup_fricc15").click(function(){
     $('.hover_bkgr_fricc15').show();
  });
  
  $('.popupCloseButton15').click(function(){
      $('.hover_bkgr_fricc15').hide();
  });
});
var menu = document.querySelector(".menu")
var ham = document.querySelector(".ham")
var xIcon = document.querySelector(".xIcon")
var menuIcon = document.querySelector(".menuIcon")

ham.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    xIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    xIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

var menuLinks = document.querySelectorAll(".menuLink")

menuLinks.forEach(
  function (menuLink) {
    menuLink.addEventListener("click", toggleMenu)
  }
)
