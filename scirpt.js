function checkEmailAddress(fieldId){
    if (document.getElementById(fieldId).value === ""){
        alert("Email required")
    }
    else if(document.getElementById(fieldId).value === "najeebkhalaku@gmail.com"){
        alert("Correct Email")
    }
    
}

let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");

let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

signinBtn.onclick = function(){
    nameField.style.maxHeight = "0";
    title.innerHTML = "Log In";
    signupBtn.classList.add("disable")
    signinBtn.classList.remove("disable")
}

signupBtn.onclick = function(){
    nameField.style.maxHeight = "60px";
    title.innerHTML = "Sing Up";
    signupBtn.classList.remove("disable")
    signinBtn.classList.add("disable");
}
