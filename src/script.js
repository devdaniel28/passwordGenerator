// Number random
function numberRadom(x, y) {
    return Math.floor(Math.random() * (y - x + 2) + x)
}

let randomNumber = numberRadom(12345, 6789)
console.log(randomNumber)

// String Random
function stringRandom(str) {
  const arr = str.split("");
  let num = arr.length; // Pegando a quantidade de caracteres da string para randomizar no loop
  for (num -= 1; num > 0; num--) { 
    let randomS = Math.floor(Math.random() * (num + 1)); // randomS == String Random
    [arr[num], arr[randomS]] = [arr[randomS], arr[num]]; // Usando desestruturação de arrays para randomizar melhor
  }
  return arr.join(""); 
}

const randomString = stringRandom("abcdefghijklmnopqrstuvwxyz");
console.log(randomString);

// Randomizando os Numeros e string com a mesma estrategia de randomização da string, teoricamente
function generatePassword(senha) {
  const randopassword = senha.split("");
  let senhaLength = randopassword.length;
  for (let i = senhaLength - 1; i > 0; i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    [randopassword[i], randopassword[randomIndex]] = [randopassword[randomIndex], randopassword[i]];
  }
  return randopassword.join("");
}

let passwordGenerate = generatePassword(randomNumber + randomString);
console.log(`A senha inteira e: ${passwordGenerate}`);  
