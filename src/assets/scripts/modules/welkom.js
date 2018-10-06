// $(document).ready(function(){
//   $('.button').on('click', function(e){
//     e.preventDefault();
//     $('.center__login').addClass('center__login__activ');
//     // $('.center__login').css('top','50%');
//     // $('.center__login').css('opacity','0.9');
//     // $('.center').css('opacity','0.9');
//     // $('.button').css('display','none');

//   });

//   $('.form__input_sub').on('click', function(e){
//     e.preventDefault();
//     $('.center__login').removeClass('center__login__activ');
//   });

//   // $('.nav__item').on('click', function(e){
//   //   $('.nav').removeClass('nav__activ');
//   // })
// });


 const parallaxConteiner = document.querySelector('.welcom__parallax');
 const layers = Array.from(parallaxConteiner.children);

 const moveLayers = e => {

 
  const initialX = (window.innerWidth / 2) - e.pageX;
  const initialY = (window.innerHeight / 2) - e.pageY;
  console.log(initialX, initialY);

  layers.forEach((layer, i) => {
    const divider = i / 100;
    const positionX = initialX * divider;
    const positionY = initialY * divider;
    const bottomPosition = (window.innerHeight / 2) * divider;
   
    const image = layer.firstElementChild;
    

    image.style.bottom = `-${bottomPosition}px`;
   
    layer.style.transform = `translate(${positionX}px, ${positionY}px)`;
 });

 }

 window.addEventListener('mousemove', moveLayers)