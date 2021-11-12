// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(b, a) {
  return (b * a) / 2;
}

// Desafio 3
// Ref.: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
function splitSentence(str) {
  return str.split(" ", 100);
}

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ", " + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(arr) {
  let maior = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] >= maior) {
      maior = arr[i];
    }
  }
  let contador = 0;
  for(let ind = 0; ind < arr.length; ind += 1) {
    if (arr[ind] === maior) {
      contador += 1;
    }
  }
return contador;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
