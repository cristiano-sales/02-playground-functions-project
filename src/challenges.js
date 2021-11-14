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
  let maior = arr[0];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] >= maior) {
      maior = arr[i];
    }
  }
  let contador = 0;
  for (let ind = 0; ind < arr.length; ind += 1) {
    if (arr[ind] === maior) {
      contador += 1;
    }
  }
  return contador;
}
console.log(highestCount([-9, -1, -2, -3, -9, -5, -7]));
//console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
//console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let a = Math.abs(mouse - cat1);
  let b = Math.abs(mouse - cat2);
  if (a < b) {
    return "cat1";
  } else if (a > b) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}
console.log(catAndMouse(-10, -7, -5));
console.log(catAndMouse(10, 5, 8));
console.log(catAndMouse(10, 2, 2));

// Desafio 8
function fizzBuzz(lista) {
  let listaVazia = [];
  for (let i = 0; i < lista.length; i += 1) {
    if (lista[i] % 5 === 0 && lista[i] % 3 === 0) {
      listaVazia.push("fizzBuzz");
    } else if (lista[i] % 5 === 0) {
      listaVazia.push("buzz");
    } else if (lista[i] % 3 === 0) {
      listaVazia.push("fizz")
    } else if (lista[i] % 2 === 0 || lista[i] % 2 !== 0) {
      listaVazia.push("bug!");
    }
  }
  return listaVazia;  
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

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
