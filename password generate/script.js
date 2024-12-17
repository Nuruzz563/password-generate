let inputSlider=document.querySelector("#inputSlider");
let sliderValue=document.querySelector("#sliderValue");
let passbox=document.querySelector("#passbox");
let lowercase=document.querySelector("#lowercase");
let uppercase=document.querySelector("#uppercase");
let numbers=document.querySelector("#numbers");
let Symbols=document.querySelector("#Symbols");

let genbtn=document.querySelector("#genbtn");
let copyIcon=document.querySelector("#copyIcon");



//showing input value
sliderValue.textContent=inputSlider.value;
inputSlider.addEventListener("input",()=>{
    sliderValue.textContent=inputSlider.value;

});

genbtn.addEventListener("click",()=>{
    passbox.value=generetPassword();
});


let lowerChars="abcdefghijklmnoprstuvwxyz"
let upperchars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumber = "0123456789";
let allSymbols="!@#$%^&*";

//function to generate Password

function generetPassword(){
    let genPassword="";
    let allChars="";

    allChars +=lowercase.checked ? lowerChars : "";
    allChars +=uppercase.checked ? upperchars : "";
    allChars +=numbers.checked ? allNumber : "";
    allChars +=Symbols.checked ? allSymbols : "";



    if(allChars == "" || allChars.length ==0){
        return genPassword;

    }
   
  let i=1;
  while(i<inputSlider.value){
    genPassword +=allChars.charAt(Math.floor(Math.random() * allChars.length));
    i++;

  }
  return genPassword;
}

    // genPassword=upperchars.charAt(Math.floor(Math.random() * upperchars.length));  // 0-1 er modde jakono number generate
    
    


    copyIcon.addEventListener("click",()=>{
        if(passbox.value !="" || passbox.value.length>=1){
        navigator.clipboard.writeText(passbox.value) //for copy
        copyIcon.innerText="Check"
        copyIcon.title="Password Copied";

        setTimeout(()=>{
            copyIcon.innerText=" content_copy";
            copyIcon.title="";

        },2000)


        }
    })
