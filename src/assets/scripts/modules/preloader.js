document.addEventListener('DOMContentLoaded', function() {
  const preloader = document.querySelector('.preloader')
  const preloaderSvg = document.querySelector('.preloader__icon')
  const circleOne = document.querySelector('.loader_outside')
  const circleTwo = document.querySelector('.loader_middle')
  const circleThree = document.querySelector('.loader_inside')
  const preloaderText = document.querySelector('.preloader__text')
  let currentPercent = 0
  let delayOfCircleOne = 30
  let delayOfCircleTwo = 20

  let animateInterval

  let animatePreloader = () => {
    currentPercent += 5
    if (currentPercent >= 100) {
      preloaderText.innerHTML = 100
      currentPercent = 100
      clearInterval(animateInterval)
      setTimeout(() => {
        preloaderSvg.style.opacity = 0
        preloaderText.style.opacity = 0
      }, 500)
      setTimeout(() => {
        preloader.style.opacity = 0
        setTimeout(() => {
          preloader.style.display = 'none'
        }, 1500)
      }, 1000)
    }
    if (currentPercent > delayOfCircleOne) {
      circleOne.style.strokeDashoffset =
        377 -
        (377 / 100) *
          (currentPercent * (delayOfCircleOne / 100 + 1) - delayOfCircleOne)
    }
    if (currentPercent > delayOfCircleTwo) {
      circleTwo.style.strokeDashoffset =
        314 -
        (314 / 100) *
          (currentPercent * (delayOfCircleTwo / 100 + 1) - delayOfCircleTwo)
    }
    circleThree.style.strokeDashoffset = 251 - (251 / 100) * currentPercent
    preloaderText.innerHTML = currentPercent
  }

  if (preloaderSvg) {
    animateInterval = setInterval(animatePreloader, 90)
  }
})