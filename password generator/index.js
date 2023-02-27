const inputSlider = document.querySelector(".dataLengthSlider");
const lengthDisplay = document.querySelector(".dataLength");
const passwordDisplay = document.querySelector(".dispay_password");
const copyMsg = document.querySelector("[data-copyMsg]");
const copyBtn = document.querySelector(".copyBtn");
const upperCase = document.querySelector(".uppercase");
const lowercase = document.querySelector(".lowercase");
const number = document.querySelector(".numbers");
const symbol = document.querySelector(".symbols");
const btn = document.querySelector(".generateNtn");
const checkBox = document.querySelector("input[type=checkbox]");
const indicator = document.querySelector(".indicator");
const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';

let password ="";
let passwordLength = 10;
let checkCount = 1;
handleSlider();

//set passwordLength
function handleSlider(){
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = 10;
}

function setIndicator(color){
    indicator.style.backgroundColor = color;

}


//random integer
function getRandomInteger(min,max){
   return Math.floor(Math.random()*(max-min)) + min;
}

function generateRandomNumber(){
    return getRandomInteger(0,9)
}

function generateLowerCase(){
    return String.fromCharCode(getRandomInteger(97,123));
}

function generateUpperCase(){
    return String.fromCharCode(getRandomInt(65,91));
}

function generateSymbols(){
    // const symbolArr = Array.from(symbols);
    const randIndx = getRndInteger(0, symbols.length);
    return symbols.charAt(randIndx);
}

function calcStrength(){
    let hasUpper = false;
    let hasLower = false;
    let hasNumber = false;
    let hasSymbol = false;
    if(upperCase.checked) hasUpper=true;
    if(lowercase.checked) hasLower = true;
    if(symbol.checked) hasSymbol = true;
    if(number.checked) hasNumber = true;

    if(hasupper && hasLower && (hasNumber||hasSymbol)){
        setIndicator("#0f0");
    }
    else if((hasLower || hasUpper)&&(hasNumber || hasSymbol) && passwordLength >=6){
        setIndicator("ff0");
    }
    else{
        setIndicator("0f00");
    }
}

async function copyContent(){
    try{
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = "copied";
    }
    catch(e){
        copyMsg.innerTect = "failed";
        
    }
    copyMsg.classList.add("active");
    setTimeout(() => {
      copyMsg.classList.remove("active");
    }, 2000);
}