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
const date = document.getElementById('datainicio');
const userInfoSection = document.getElementById('userinfo');



//Write User Data
function userData() {
  const dataDiv = document.createElement('div');
  const inputs = document.querySelectorAll('input');
  for (let i = 0; i < inputs.length; i += 1) {
    const description = document.createElement('p');
    const data = document.createElement('span');
    description.innerHTML = inputs[i].name + ":";
    data.innerHTML = inputs[i].value + "<br>";
    dataDiv.appendChild(description);
    dataDiv.appendChild(data);
  }
  userInfoSection.appendChild(dataDiv);
}

//Erase Button
function eraseData() {}

window.onload = function() {

  createStates();

  date.DatePickerX.init({
    format: 'dd/mm/yyyy',
  })

  validation.init('#myForm', {
    events: ['submit', 'change', 'keyup', 'paste'],
  })
  enviarBtn.addEventListener('click', function(event) {
    event.preventDefault();
    userData();
  })

  resetBtn.addEventListener('click', function() {
    const spans = document.querySelectorAll('span');
    for (let i = 0; i < spans.length; i += 1) {
      spans[i].innerHTML = '';
    }
    userInfoSection.style.display = 'none'
  })
}