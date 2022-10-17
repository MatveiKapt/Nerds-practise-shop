const firstSlide = document.querySelector('.preview-first');
const secondSlide = document.querySelector('.preview-second');
const thirdSlide = document.querySelector('.preview-third');
const firstSlideButton = document.querySelector('.first-slide-button');
const secondSlideButton = document.querySelector('.second-slide-button');
const thirdSlideButton = document.querySelector('.third-slide-button');

firstSlideButton.addEventListener('click', function () {
  firstSlide.classList.add('slide-current');
  secondSlide.classList.remove('slide-current');
  thirdSlide.classList.remove('slide-current');

  firstSlideButton.classList.add('current');
  secondSlideButton.classList.remove('current');
  thirdSlideButton.classList.remove('current');
})

secondSlideButton.addEventListener('click', function () {
  secondSlide.classList.add('slide-current');
  firstSlide.classList.remove('slide-current');
  thirdSlide.classList.remove('slide-current');

  secondSlideButton.classList.add('current');
  firstSlideButton.classList.remove('current');
  thirdSlideButton.classList.remove('current');
})

thirdSlideButton.addEventListener('click', function () {
  thirdSlide.classList.add('slide-current');
  secondSlide.classList.remove('slide-current');
  firstSlide.classList.remove('slide-current');

  thirdSlideButton.classList.add('current');
  secondSlideButton.classList.remove('current');
  firstSlideButton.classList.remove('current');
})
