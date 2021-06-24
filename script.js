const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')
const includeUppercaseElement = document.getElementById('includeUpperCase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSymbolsElement = document.getElementById('includeSymbols')
const form = document.getElementById('passwordGeneratorForm')
const passwordDisplay = document.getElementById('passwordDisplay') //gets the password
//console.log(characterAmountRange)
//console.log(characterAmountNumber)
//console.log(includeUppercaseElement)
//console.log(includeNumbersElement)
//console.log(includeSymbolsElement)

//Using the ASCII Character Codes Table gets all the upper case codes from 65 - 90
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)

const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126))

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e => {
  e.preventDefault()
  const characterAmount = characterAmountNumber.value
  const includeUppercase = includeUppercaseElement.checked
  const includeNumbers = includeNumbersElement.checked
  const includeSymbols = includeSymbolsElement.checked
  const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
  passwordDisplay.innerText = password //not sure
})

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
  let charCodes = LOWERCASE_CHAR_CODES
    if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
    if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
    if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
    
    const passwordCharacters = []
    for (let i= 0; i < characterAmount; i++) {
      //const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
      //passwordCharacters.push(string.fromCharCode(characterCode)) //gives error

      const character = charCodes[Math.floor(Math.random() * characterAmount)]
      passwordCharacters.push(character) //Works

      //const characterCode = charCodes[Math.floor(Math.random() * characterAmount)]
      //passwordCharacters.push(string.fromCharCode(characterCode)) 
    }
    //console.log(LOWERCASE_CHAR_CODES)
    return passwordCharacters.join('')
}

//generates from low number to high number
function arrayFromLowToHigh(low, high) {
 const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)    
    }
    return array
}

function syncCharacterAmount(e) {
  const value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
}

//console.log("Helloworld")
