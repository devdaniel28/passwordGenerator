function randomCaracteres(str) {
  const arr = str.split("")
  let numberArray = arr.length; // Pegando a quantidade de caracteres da string para randomizar no loop
  for (numberArray -= 1; numberArray > 0; numberArray--) { 
    let caracteresRandom = Math.floor(Math.random() * (numberArray + 1)); // caracteresRandom == String Random
    [arr[numberArray], arr[caracteresRandom]] = [arr[caracteresRandom], arr[numberArray]] // Usando desestruturação de arrays para randomizar melhor
  }
  return arr.join("")
}

function desiredText() {
    const textHere = document.createElement("input")
    const textThere = document.getElementById('textthere')
    const desiredText = document.getElementById('desiredtext')

    textHere.type = "text"
    textHere.placeholder = "Digite o texto que deseja.."
    textHere.id = "texthere"

    textThere.appendChild(textHere)

    return desiredText.style.display = 'none'
}

const randomString = randomCaracteres("abcdefghijklmnopqrstuvwxyz")
console.log(randomString)

const randomNumber = randomCaracteres("1234567890")
console.log(randomNumber)

const randomBigString = randomCaracteres("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
console.log(randomBigString)

const specialCharacters = randomCaracteres("!@#$%&*~?/")


// Função que gera a senha do jeito que o ususario deseja
function generatePassword() {
  let randomPassword = randomCaracteres(randomNumber + randomBigString + randomString + specialCharacters)
  console.log(`A senha inteira e: ${randomPassword}`)
  randomPassword.split("")

  let characterValue = document.getElementById('charactervalue')
  let allowLargePrint = document.getElementById('allowlargeprint').checked
  let allowNumbers = document.getElementById("allownumbers").checked
  let allowSpecialCharacters = document.getElementById("allowspecialsharacters").checked
  
if (allowLargePrint == false) {
  const removeLargePrints =  ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  removeLargePrints.forEach(char => {
    randomPassword = randomPassword.split(char).join('');
});
}

if (allowNumbers == false) {
  const removeNumbers = ["1","2","3","4","5","6","7","8","9","0"]
   removeNumbers.forEach(char => {
    randomPassword = randomPassword.split(char).join('')
   })
}

if (allowSpecialCharacters == false) {
  const removeSpecialCharacters = ["!","@","#","$","%","&","*","~","?","/"]
  removeSpecialCharacters.forEach(char => {
    randomPassword = randomPassword.split(char).join('')
   })
}

// Quantidade de caracteres
let desiredPassword = randomPassword.slice(0, characterValue.value)
console.log(`A senha desejada e: ${desiredPassword}`)

let passwordResult = document.getElementById("passwordresult")

passwordResult.value = desiredPassword

if (characterValue.value < 5 || characterValue.value > 62) {
    passwordResult.value = 'Quantidade de caracteres invalida!'
  }

}

async function copyPassword() {
  let passwordToCopy = document.getElementById("passwordresult")
  
  try {
    await navigator.clipboard.writeText(passwordToCopy.value);
    passwordToCopy.value = "Senha copiada!"
    console.log('Texto copiado para a área de transferência')
  } catch (err) {
    console.error(err);
  }
}