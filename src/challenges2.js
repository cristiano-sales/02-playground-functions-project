// Desafio 10
function techList(array, name) {
  if (array.length === 0) {
    return 'Vazio!'
  }
  let objetos = [];
  for (i = 0; i < array.length; i += 1) {
    objetos.push({tech: array.sort()[i], name});
  }
  return objetos
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Lucas'));


// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
