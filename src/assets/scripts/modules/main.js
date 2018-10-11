var parallax = (function () {
  var bg = document.querySelector('.header__img');
  var user = document.querySelector('.header__centr');
  var sectionText = document.querySelector('.header__portfolio');
    return {
      move(block, windowScroll, strafeAmount) {
        var strafe = windowScroll / -strafeAmount + '%';
        var transformString = 'translate3d(0, ' + strafe + ', 0)';

        var style = block.style;

        style.transform = transformString;
        style.webkitTransform = transformString;
        console.log("kfjgvkdfnjf");
      },
      init(wScroll) {
        this.move(bg, wScroll, 45);
        this.move(sectionText, wScroll, 10);
        this.move(user, wScroll, 3);
        
      }
    }
      
}());



window.onscroll = function() {
  var wScroll = window.pageYOffset;
  
  parallax.init(wScroll);
  console.log(wScroll);
}

window.onresize = function() {
  blur.set();
}
