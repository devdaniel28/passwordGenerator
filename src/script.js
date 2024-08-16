function randomCaracteres(str) {
  const arr = str.split("")
  let numberArray = arr.length; // Pegando a quantidade de caracteres da string para randomizar no loop
  for (numberArray -= 1; numberArray > 0; numberArray--) { 
    let caracteresRandom = Math.floor(Math.random() * (numberArray + 1)); // caracteresRandom == String Random
    [arr[numberArray], arr[caracteresRandom]] = [arr[caracteresRandom], arr[numberArray]] // Usando desestruturação de arrays para randomizar melhor
  }
  return arr.join("")
}

const randomString = randomCaracteres("abcdefghijklmnopqrstuvwxyz")
console.log(randomString)

const randomNumber = randomCaracteres("1234567890")
console.log(randomNumber)

const randomBigString = randomCaracteres("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
console.log(randomBigString)

const specialCharacters = randomCaracteres("!@#$%&*~?/")

let randomPassword = randomCaracteres(randomNumber + randomBigString + randomString + specialCharacters)
console.log(`A senha inteira e: ${randomPassword}`)
randomPassword.split("")

function generatePassword() {
  let characterValue = document.getElementById('charactervalue')
  let allowLargePrint = document.getElementById('allowlargeprint')
  let allowNumbers = document.getElementById("allownumbers")
  let allowSpecialCharacters = document.getElementById("allowspecialsharacters")
  

  // Quantidade de caracteres
  let desiredPassword = randomPassword.slice(0, characterValue.value)
  console.log(`A senha desejada e: ${desiredPassword}`)

}