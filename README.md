# Gerador de Senhas Aleatórias

**Link:** 

Este projeto consiste em um gerador de senhas personalizáveis escrito em JavaScript. Ele permite criar senhas aleatórias compostas por letras maiúsculas, minúsculas, números e caracteres especiais, de acordo com as preferências do usuário.

## Funcionalidades

- **Geração de Strings Aleatórias:** O código contém uma função `randomCaracteres` que embaralha os caracteres de uma string fornecida.
- **Personalização de Senhas:** A função `generatePassword` permite que o usuário escolha se quer incluir letras maiúsculas, números e caracteres especiais em sua senha.
- **Cópia da Senha:** A função `copyPassword` permite copiar a senha gerada para a área de transferência.

## Como Usar

### Função `randomCaracteres`

A função `randomCaracteres` embaralha os caracteres de uma string fornecida:

```javascript
function randomCaracteres(str) {
  const arr = str.split("");
  let numberArray = arr.length;
  for (numberArray -= 1; numberArray > 0; numberArray--) { 
    let caracteresRandom = Math.floor(Math.random() * (numberArray + 1));
    [arr[numberArray], arr[caracteresRandom]] = [arr[caracteresRandom], arr[numberArray]];
  }
  return arr.join("");
} 
```
### Função `generatePassword`

A função `generatePassword` cria uma senha com base nas preferências do usuário. O usuário pode selecionar:

- **Quantidade de Caracteres:** Definida pelo valor do campo charactervalue.
- **Incluir Letras Maiúsculas:** Controlado pelo checkbox allowlargeprint.
- **Incluir Números:** Controlado pelo checkbox allownumbers.
- **Incluir Caracteres Especiais:** Controlado pelo checkbox allowspecialsharacters.

```javascript
function generatePassword() {
  let randomPassword = randomCaracteres(randomNumber + randomBigString + randomString + specialCharacters);
  randomPassword.split("");

  let characterValue = document.getElementById('charactervalue');
  let allowLargePrint = document.getElementById('allowlargeprint').checked;
  let allowNumbers = document.getElementById("allownumbers").checked;
  let allowSpecialCharacters = document.getElementById("allowspecialsharacters").checked;
  
  if (!allowLargePrint) {
    const removeLargePrints =  ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    removeLargePrints.forEach(char => {
      randomPassword = randomPassword.split(char).join('');
    });
  }

  if (!allowNumbers) {
    const removeNumbers = ["1","2","3","4","5","6","7","8","9","0"];
    removeNumbers.forEach(char => {
      randomPassword = randomPassword.split(char).join('');
    });
  }

  if (!allowSpecialCharacters) {
    const removeSpecialCharacters = ["!","@","#","$","%","&","*","~","?","/"];
    removeSpecialCharacters.forEach(char => {
      randomPassword = randomPassword.split(char).join('');
    });
  }

  let desiredPassword = randomPassword.slice(0, characterValue.value);
  console.log(`A senha desejada é: ${desiredPassword}`);

  let passwordResult = document.getElementById("passwordresult");
  passwordResult.value = desiredPassword;
}
```

## Exemplo de Uso

```javascript
const randomString = randomCaracteres("abcdefghijklmnopqrstuvwxyz");
console.log(randomString);

const randomNumber = randomCaracteres("1234567890");
console.log(randomNumber);

const randomBigString = randomCaracteres("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
console.log(randomBigString);

const specialCharacters = randomCaracteres("!@#$%&*~?/");
```

Este exemplo gera strings aleatórias a partir de conjuntos de caracteres pré-definidos e as exibe no console.

## Licença

Este projeto é licenciado sob a Licença Pública Geral GNU (GNU General Public License - GPL). Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

### GNU General Public License

A GNU General Public License é uma licença de software livre que garante aos usuários a liberdade de executar, estudar, compartilhar e modificar o software. O objetivo principal é assegurar que o software permaneça livre e que qualquer derivado também seja distribuído sob a mesma licença.

Para mais informações sobre a GNU GPL, consulte [GNU General Public License](https://www.gnu.org/licenses/gpl-3.0.html).


**Autor:** ChatGPT
 