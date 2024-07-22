function numberRadom(x, y) {
    return Math.floor(Math.random() * (y - x + 2) + x)
}

let randomNumber = numberRadom(12345, 6789)
console.log(randomNumber)

function stringRandom(str) {
   const arr = str.split("")
   
   let num = arr.length // Pegando a quantidade de caracteres da string para randomizar no loop
   for (num - 1; num > 0; num--) { 
     const randomS = Math.floor(Math.random() * (num + 1)) // randomS == String Random
     [arr[num], arr[randomS]] = [arr[randomS], arr[num]]; // Usando desestruturação de arrays para randomizar melhor
   }
  return arr.join("") 
}

let randomString = stringRandom("abcdefghijklmnopqrstuvwxyz")
console.log(randomString)
