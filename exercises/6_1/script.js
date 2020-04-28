const inputEstados = document.querySelector('#estado');

//States
let estados = ['AC', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO']

//Create States Function
function createStates() {
  for (let i = 0; i < estados.length; i += 1) {
    let option = document.createElement('option');
    option.innerHTML = estados[i];
    inputEstados.appendChild(option);
  }
}

const form = document.forms['user'];
const enviarBtn = document.getElementById('enviar');
const resetBtn = document.getElementById('resetar');
const date = document.getElementById('data');
const userInfoSection = document.getElementById('userinfo');

function checkDay(day) {
  return day > 0 && 0 <= 31;
}

function checkMonth(month) {
  return month > 0 && 0 <= 12;
}

function checkYear(year) {
  return year > 0;
}

function msgError() {
  alert('Digite a data corretamente');
}

function checkDate() {
  const date = form.datainicio.value.split('/');
  const day = checkDay(Number.parseInt(date[0], 10));
  const month = checkMonth(Number.parseInt(date[1], 10));
  const year = checkYear(Number.parseInt(date[2], 10))
  return day && month && year;
}

function testDate() {
  const date = form.datainicio.value.split('/');
  const result =checkDate();
  if (date === -1 || !result) {
    msgError();
  } else {
    return true;
  }
}

function userData() {
  const dataDiv = document.createElement('div');
  const inputs = document.querySelectorAll('input');
  for (let i = 0; i < inputs.length; i += 1) {
    const description = document.createElement('span');
    const data = document.createElement('span');
    description.innerHTML = inputs[i].name;
    data.innerHTML = inputs[i].value + "<br>";
    dataDiv.appendChild(description);
    dataDiv.appendChild(data);
  }
  userInfoSection.appendChild(dataDiv);
}

window.onload = function() {

  createStates();
  enviarBtn.addEventListener('click', function(event) {
    event.preventDefault();
    userData();
    checkDate();
    testDate();
  })
  
  

}