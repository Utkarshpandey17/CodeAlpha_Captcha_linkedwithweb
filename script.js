const captchaTextBox =document.querySelector(".captch_box input");
const refreshButton =document.querySelector(".refresh_button"); 
const captchaInputBox =document.querySelector(".captch_input input");
const message =document.querySelector(".message");
const submitButton =document.querySelector(".button");

let captchaText = null;

const generateCaptcha = () => {
            
                const randomString = Math.random().toString(36).substring(2,7);
                const randomStringArray = randomString.split("");
                const changeString = randomStringArray.map((char) => (Math.random() > 0.52 ? char.toUpperCase() : char));
                captchaText = changeString.join("  ")
                console.log(captchaText);
                captchaTextBox.value= captchaText;
};
const refreshBtnClick = () => {
    generateCaptcha();

}
const captchaKeyUpValidate = () => {
    //Toggle submit button disable class based on captcha input field.
    submitButton.classList.toggle("disabled", !captchaInputBox.value )
    if(captchaInputBox.value === "")message.classList.remove("active");
}
const submitBtnClick = () => {
    captchaText = captchaText
    .split("")
    .filter((char) => char !== " ")
    .join("");

message.classList.add("active");
// check the entered captcha is correct or not
    if(captchaInputBox.value  ===  captchaText){
       message.innerText = "Entered Captcha Is correct";
        message.style.color ="#826afb";

    
    }
    else{
        message.innerText = "Entered Captcha is not correct";
        message.style.color = "#FF2525";
    }

    console.log(captchaText);
}


//Add event listeners for the refresh button , captchaInputBox
refreshButton.addEventListener("click", refreshBtnClick);
captchaInputBox.addEventListener("keyup", captchaKeyUpValidate);
submitButton.addEventListener("click", submitBtnClick);

// Generate a captcha when the page loads
generateCaptcha();



