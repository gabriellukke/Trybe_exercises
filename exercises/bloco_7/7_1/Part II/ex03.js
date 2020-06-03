const btn = document.querySelector('.btn');
const counter = document.querySelector('.count');
let clickCount = 0;

btn.addEventListener('click', () => {
  clickCount += 1;
  counter.innerText = clickCount;
})