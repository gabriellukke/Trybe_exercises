const inputEstados = document.querySelector('#estado');
const form = document.forms['user'];
const enviarBtn = document.getElementById('enviar');
const resetBtn = document.getElementById('resetar');
const date = document.getElementById('data');

let estados = ['AC', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO']

for (let i = 0; i < estados.length; i += 1) {
  let option = document.createElement('option');
  option.innerHTML = estados[i];
  inputEstados.appendChild(option);
}

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