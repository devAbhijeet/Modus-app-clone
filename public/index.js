$(document).ready(function() {
  
  var $slider = $(".slider"),
      $slideBGs = $(".slide__bg"),
      diff = 0,
      curSlide = 0,
      numOfSlides = $(".slide").length-1,
      animating = false,
      animTime = 500,
      autoSlideTimeout,
      autoSlideDelay = 6000;  
  function manageControls() {
    $(".slider-control").removeClass("inactive");
    if (!curSlide) $(".slider-control.left").addClass("inactive");
    if (curSlide === numOfSlides) $(".slider-control.right").addClass("inactive");
  };
  
  function changeSlides(instant) {
    if (!instant) {
      animating = true;
      manageControls();
      $slider.addClass("animating");
      $slider.css("top");
      $(".slide").removeClass("active");
      $(".slide-"+curSlide).addClass("active");
      setTimeout(function() {
        $slider.removeClass("animating");
        animating = false;
      }, animTime);
    }
    $(".slider-pagi__elem").removeClass("active");
    $(".slider-pagi__elem-"+curSlide).addClass("active");
    $slider.css("transform", "translate3d(0,"+ -curSlide*100 +"%,0)");
    $slideBGs.css("transform", "translate3d(0,"+ curSlide*50 +"%,0)");
    diff = 0;
  }

  function navigateLeft() {
    if (animating) return;
    if (curSlide > 0) curSlide--;
    changeSlides();
  }

  function navigateRight() {
    if (animating) return;
    if (curSlide < numOfSlides) curSlide++;
    changeSlides();
  }

  $(document).on("mousedown touchstart", ".slider", function(e) {
    if (animating) return;
    window.clearTimeout(autoSlideTimeout);
    var startY = e.pageY || e.originalEvent.touches[0].pageY,
        winW = $(window).width();
    diff = 0;
    
    $(document).on("mousemove touchmove", function(e) {
      var y = e.pageY || e.originalEvent.touches[0].pageY;
      diff = (startY - y) / winW * 70;
      var calc1 = curSlide*100/(curSlide*100 + diff/2) || 1;
      var calc2 = curSlide*50/(curSlide*50 + diff/2) || 1;
      var deg1;
      if ((!curSlide && diff < 0) || (curSlide === numOfSlides && diff > 0)) diff /= 2;
      if(y>startY){
        deg1 = 50%((curSlide*50 + diff/2)%50);
      }else{
        deg1 = (curSlide*50 + diff/2)%50;
      }
      $slider.css({
        "transform" : "translate3d(0,"+ (-curSlide*100 - diff) +"%,0) rotateY("+deg1+"deg) rotateX(0)"
      });
      $(".slide-"+curSlide+" .slide__bg").css({
        "transform" : "translate3d(0,"+ (curSlide*50 + diff/2) +"%,0) rotateY("+deg1+"deg) rotateX(0)"
      });
    });
  });
  
  $(document).on("mouseup touchend", function(e) {
    $(document).off("mousemove touchmove");
    if (animating) return;
    if (!diff) {
      changeSlides(true);
      return;
    }
    if (diff > -8 && diff < 8) {
      changeSlides();
      return;
    }
    if (diff <= -8) {
      navigateLeft();
    }
    if (diff >= 8) {
      navigateRight();
    }
  });
  
});