const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

const checkNumber = (input) => {

  const cleanedNumber = input.replace(/[^\d]/g, '');

  if(cleanedNumber.charAt(0) === "1"){
    const areaCode = cleanedNumber.substring(1, 4);
    const exchangeCode = cleanedNumber.substring(4, 7);
    if( areaCode.charAt(0) === "0" || areaCode.charAt(0) === "1" || exchangeCode.charAt(0) === "0" || exchangeCode.charAt(0) === "1")
  {
    return false;
  }
  } else{
    const areaCode = cleanedNumber.substring(0, 3);
    const exchangeCode = cleanedNumber.substring(3, 6);
    if( areaCode.charAt(0) === "0" || areaCode.charAt(0) === "1" || exchangeCode.charAt(0) === "0" || exchangeCode.charAt(0) === "1")
  {
    return false;
  }
  }

  if(!input){
    alert("Please provide a phone number");
  }
  
  if(cleanedNumber.length !== 10 && !(cleanedNumber.length === 11 && cleanedNumber.charAt(0) === "1")){
    return false;
  }
  
  const regex = /^(\+?1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

  if(!regex.test(input)){
    return false;
  }

  return true;
  
};



checkBtn.addEventListener("click", () => { 
  const inputValue = userInput.value.trim();
  const isValid = checkNumber(inputValue);
  
  if(isValid){
    result.innerHTML += `<br> Valid US number: ${inputValue}`;
    console.log("true");
  }else {
    result.innerHTML += `<br> Invalid US number: ${inputValue}`;
    console.log("false");
  }
});

clearBtn.addEventListener("click", () => {
  result.textContent = "";
})