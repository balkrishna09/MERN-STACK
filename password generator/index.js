const inputSlider = document.querySelector(".dataLengthSlider");
const lengthDisplay = document.querySelector(".dataLength");
const passwordDisplay = document.querySelector(".display_password");
const copyMsg = document.querySelector("[data-copyMsg]");
const copyBtn = document.querySelector(".data-copy");
const upperCase = document.querySelector(".uppercase");
const lowercase = document.querySelector(".lowercase");
const number = document.querySelector(".numbers");
const symbol = document.querySelector(".symbols");
const generateBtn = document.querySelector(".generateBtn");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const indicator = document.querySelector(".indicator");
const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';

let password ="";
let passwordLength = 10;
let checkCount = 0;
handleSlider();

//set passwordLength
function handleSlider(){
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
}

// function setIndicator(color){
//     indicator.style.backgroundColor = color;

// }


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
    return String.fromCharCode(getRandomInteger(65,91));
}

function generateSymbols(){
    // const symbolArr = Array.from(symbols);
    const randIndx = getRandomInteger(0, symbols.length);
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

    if(hasUpper && hasLower && (hasNumber||hasSymbol)){
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

inputSlider.addEventListener("input",(e)=>{
    passwordLength = e.target.value;
    handleSlider();
})

copyBtn.addEventListener('click',()=>{
    if (passwordDisplay.value){
        copyContent();
    }
})

function handleCheckBoxChange(){
    checkCount = 0;
    allCheckBox.forEach((checkbox)=>{
        if(checkbox.checked)
        checkCount++;
    })

    if(passwordLength < checkCount){
        passwordLength = checkCount;
        handleSlider();
    }

}

allCheckBox.forEach((checkbox)=>{
    checkbox.addEventListener('change',handleCheckBoxChange);
})


generateBtn.addEventListener("click",()=>{
    //none checkbox ticked
    if(checkCount <=0) return;

    if(passwordLength < checkCount){
        passwordLength = checkCount;
        handleSlider();
    }

    //remove old password
    password = "";

    //lets put stuff acc to check box
    // if(upperCase.checked){
    //     password += generateUpperCase();
    // }
    // if(lowercase.checked){
    //     password += generateLowerCase();
    // }
    // if(number.checked){
    //     password += generateRandomNumber();
    // }
    // if(symbol.checked){
    //     password += generateSymbols();
    // }

    var funcArr = [];
    if(upperCase.checked){
        funcArr.push(generateUpperCase);
    }
    if(lowercase.checked){
        funcArr.push(generateLowerCase);
    }
    if(number.checked){
        funcArr.push(generateRandomNumber);
    }
    if(symbol.checked){
        funcArr.push(generateSymbols);
    }

    //compulsory addition
    for(let i=0; i<funcArr.length; i++){
        password += funcArr[i]();
    }

    //remaining
    for(let i=0; i<passwordLength-funcArr.length; i++){
        let randIndex = getRandomInteger(0,funcArr.length);
        password += funcArr[randIndex]();
    }

    //shuffle password
    password = shufflePassword(Array.from(password)); 
    console.log(password);

    //show in UI
    passwordDisplay.value = password;

    // calcStrength();

});

function shufflePassword(array) {
    //Fisher Yates Method
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    let str = "";
    array.forEach((el) => (str += el));
    return str;
}
