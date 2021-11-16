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
// console.log(highestCount([-9, -1, -2, -3, -9, -5, -7]));
// console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
// console.log(highestCount([0, 0, 0]));

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
// console.log(catAndMouse(-10, -7, -5));
// console.log(catAndMouse(10, 5, 8));
// console.log(catAndMouse(10, 2, 2));

// Desafio 8
// Ajuda: [Gilson Nogueira]
// Referência: [Gilson Nogueira] https://github.com/tryber/sd-018-a-project-playground-functions/pull/110/commits/2847b5e074310878820f24318c4420c7bfa37aa6
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
// console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
// Ajuda: [Leonardo Vogel]
// Referência: [Vinicius Pacheco Franco] https://github.com/tryber/sd-018-a-project-playground-functions/pull/135/commits/c4cf0726193e74703a5abea3b67f1ff89e0e59cc 
function encode(string) {
  string = string.split('');
  let recebeCaracteres = [];
  for (i = 0; i < string.length; i += 1) {
    switch (string[i]) {
      case ('a'): recebeCaracteres[i] = 1; break;
      case ('e'): recebeCaracteres[i] = 2; break;
      case ('i'): recebeCaracteres[i] = 3; break;
      case ('o'): recebeCaracteres[i] = 4; break;
      case ('u'): recebeCaracteres[i] = 5; break;
      default: recebeCaracteres[i] = string[i];
    }
  }
  recebeCaracteres = recebeCaracteres.join('');
  return recebeCaracteres;
}
// console.log(encode('Hi there a e i o u'));

function decode(string) {
  string = string.split('');
  let listaVazia = [];
  for (i = 0; i < string.length; i += 1) {
    switch (string[i]) {
      case ('1'): listaVazia[i] = 'a'; break;
      case ('2'): listaVazia[i] = 'e'; break;
      case ('3'): listaVazia[i] = 'i'; break;
      case ('4'): listaVazia[i] = 'o'; break;
      case ('5'): listaVazia[i] = 'u'; break;
      default: listaVazia[i] = string[i];
    }
  }
  listaVazia = listaVazia.join('');
  return listaVazia;
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
