// Desafio 10
// Referência: [Yuri Carvalho] https://github.com/tryber/sd-018-a-project-playground-functions/pull/10/commits/a1da5d69842740fbb1e43c19aa91e64a0746e953
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

// // Desafio 11
// Ajuda: [Vinicius Pacheco Franco]
function generatePhoneNumber(phoneNumber) {
  let count = 0;
  let ddd; let part1; let part2;
  if (phoneNumber.length !== 11) {
    return 'Array com tamanho incorreto.'
  }
  for (let i = 0; i < phoneNumber.length; i += 1) {
    for (let j = 0; j < phoneNumber.length; j += 1) {
      if (phoneNumber[i] === phoneNumber[j]) {
        count += 1;
      }
    }
    if (phoneNumber[i] < 0 || count >= 3) {
      return "não é possível gerar um número de telefone com esses valores";
    }
    count = 0;
  }
  // ddd = phoneNumber.slice(0, 2).join(''); part1 = phoneNumber.slice(2, 7).join(''); part2 = phoneNumber.slice(7, 11).join('');
  // let theNumber = `(${ddd}) ${part1}-${part2}`;
  // return theNumber;
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
// Ajuda: [Quesia Mendes]
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC) ||
      lineB < lineA + lineC && lineB > Math.abs(lineA - lineC) ||
      lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)) {
    return true;  
  } return false;
}
console.log(triangleCheck(10, 14, 8));

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
