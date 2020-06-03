const assert = require('assert');

function change(param) {
  return !param;
}

// implemente seus testes aqui
assert.ok(() => { change(true) }, false );
assert.ok(() => { change(false) }, true);