// const nav = document.querySelector('.nav__blog');
// const navList = nav.querySelector('.nav__item');
// const navBtn = nav.getElementsByClassName('nav__list');
// const articlesList = document.getElementsByClassName('blog__right');
// const articles = document.querySelectorAll(".blog__text");
// const activeBtnClass = 'nav__list_btn--active'; // Класс для стилизации активной кнопки
// const speed = 1; // Скорость скроллинга до статьи
// let clickAnimation = false; //  Флаг для того, чтобы присваивание классов при скроллинге не пересекалось с присваиванием классов при клике на кнопку
// let positionArticles = [];
// let navBtnArray = Array.from(navBtn);
// const articlesArray = Array.from(articles);

// navList.children[0].classList.add(activeBtnClass); // Сразу добавляем активный класс для первой кнопки, ведь как только прокручиваем до блога, сразу видим первую статью

// window.addEventListener("load", init); // Как только все ресурсы загузятся, сработает функция init

// function anchorActive() { // Функция для того, чтобы при клике на кнопку, страница плавно докручивалась до соответствующей статьи
//   for (let i = 0; i < navBtn.length; i++) { // Проходим циклом по каждоый кнопке
//     navBtn[i].addEventListener('click', function(e) { // Отслеживаем клик по кнопке
//       clickAnimation = true; // Активируем флаг, как только кликнули по кнопке
//       if (!(navBtn[i].classList.contains(activeBtnClass))) { // Если на кнопке нет активного класса, то снова проходимся циклом по всем кнопкам и удаляем везде активные классы, и добавляем только той кнопке, по которой кликнули
//         for (var j = 0; j < navBtn.length; j++) {
//             navBtn[j].classList.remove(activeBtnClass);
//             this.classList.add(activeBtnClass);
//           }
//       }

//       let windowY = window.pageYOffset; // Переменная windowY хранит информацию на сколько пикселей прокручена страница по вертикали
//       const indexBtn = e.target.dataset.indexButton; // Переменная indexBtn хранит данные из атрибута data-index-button текущей кнопки
//       const currentArticle = document.querySelector(`[data-article = "${indexBtn}"]`); // Ищем элемент, у которого значение атрибута data-article совпадает со значением атрибута data-index-button текущей кнопки, и кладем в переменную currentArticle
//       const coord = currentArticle.getBoundingClientRect().top; // Переменная coord хранит позицию текущей статьи относительно начала окна браузера 
//       let start = null; // 

//        requestAnimationFrame(step); // requestAnimationFrame() – встроенный метод JavaScript для плавной анимации. Функция step будет вызвана, когда придёт время обновить анимацию на следующей перерисовке.
      
//       function step(time) {
//           if (start === null)  start = time;
//           let progress = time - start;
          
//           let coordY;
//             if (coord < 0) {
//               coordY = Math.max(windowY - progress / speed, windowY + coord)
//             } else {
//               coordY = Math.min(windowY + progress / speed, windowY + coord);
//             }
//         console.log(coordY);

//           window.scrollTo(0, coordY); // Скроллим страницу на coordY пикселей по вертикали и 0 по горизонтали
        
//           if (coordY != windowY + coord) {
//             requestAnimationFrame(step); // Если еще не докрутили страницу до нужной статьи, то снова вызываем метод
//           } else {
//             clickAnimation = false; // Как только доскроллили до нужной статьи, флаг отключаем
//           }
//         }
//     })
//   }
// }

// function init() { // Инициализирующая функция, в которой вызываются все остальные функции, объявленные здесь
//   positionArticles = setPositionArticles(articlesArray);
  
//   anchorActive();
//   scrollActiveClass();

//   window.addEventListener("scroll", scrollActiveClass); // При событии скролл срабатывает scrollActiveClass
// }

// function scrollActiveClass() {
//   positionArticles.forEach((el, i) => {
//     let currentEl = navBtnArray[i];
//     if (clickAnimation) return; // Если clickAnimation является true, то классы при скроллинге не добаляются
      
//     if (isVisible(el, currentEl)) {
//       for (const iter of navBtnArray) {
//         iter.classList.remove(activeBtnClass);
//       }
      
//       currentEl.classList.add(activeBtnClass);
//     }
//   });
// }

// function isVisible(element, current) {
//   let scroll = window.pageYOffset; // Переменная scroll хранит информацию на сколько пикселей прокручена страница по вертикали

//   return scroll >= element.top - 5 && scroll < element.bottom;
// }

// function setPositionArticles(elements) {
//   let position = [];
//   Array.from(elements).forEach((item, i) => {
//     position[i] = {};
//     position[i].item = item;
//     position[i].top = item.getBoundingClientRect().top + window.pageYOffset;
//     position[i].bottom =
//       item.getBoundingClientRect().bottom + window.pageYOffset;
//   });
  
//   return position;
// }