
var blur = (function () {
  var wrapper = document.querySelector('.work__form-centr'),
      form = document.querySelector('.work__blur');


    return {
      set() {
          var imgWidth = document.querySelector('.work__consol').offsetWidth,
              posLeft = -wrapper.offsetLeft,
              posTop = -wrapper.offsetTop,
              blurCss = form.style;

          blurCss.backgroundSize = `${imgWidth} px auto`;
          blurCss.backgroundPosition = ` ${posLeft} px ${posTop} px`;

        
      }
    }
}());

blur.set();

