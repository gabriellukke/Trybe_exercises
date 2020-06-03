window.onload = function () {

  let container = document.querySelector('.container');
  let content = document.querySelector('.content');
  let backGround = document.getElementById('bg-color');
  let color = document.getElementById('letter-color');
  let fontSize = document.getElementById('font-size');
  let lineHeight = document.getElementById('line-space');
  let fontFamily = document.getElementById('font-family');

  backGround.addEventListener('change', function () {
    container.style.backgroundColor = backGround.value;
    localStorage.setItem('backgroundColor', backGround.value);
  })

  color.addEventListener('change', function () {
    container.style.color = color.value;
    localStorage.setItem('color', color.value);
  })

  fontSize.addEventListener('change', function () {
    content.style.fontSize = fontSize.value + 'px';
    localStorage.setItem('fontSize', fontSize.value);
  })

  lineHeight.addEventListener('change', function () {
    content.style.lineHeight = lineHeight.value + 'px';
    localStorage.setItem('lineHeight', lineHeight.value);
  })

  fontFamily.addEventListener('change', function () {
    content.style.fontFamily = fontFamily.value;
    localStorage.setItem('fontFamily', fontFamily.value);
    fontFamily.value = '';
  })

  if (typeof(Storage) !== 'undefined') {
    if (localStorage.backgroundColor) container.style.backgroundColor = localStorage.backgroundColor;
    
    if (localStorage.color) container.style.color = localStorage.color;

    if (localStorage.fontSize) content.style.fontSize = localStorage.fontSize;

    if (localStorage.lineHeight) content.style.lineHeight = localStorage.lineHeight;

    if (localStorage.fontFamily) content.style.fontFamily = localStorage.fontFamily;
  } else {
    console.log('Sem suporte para Web Storage')
  }


  
}
