/* Add your JavaScript to this file */
"use strict";
document.addEventListener('DOMContentLoaded', () => {
const b = document.querySelector(".newsletter");
b.addEventListener("submit",myFunction);


function myFunction() {
    event.preventDefault();
    let email = document.getElementById("email");
    const ms = document.querySelector(".message");
    ms.innerHTML = "";
    if (email.value == ""){
        ms.innerHTML = "Please enter valid email address";
    }
    else{
        ms.innerHTML= "Your email address "+ email.value +" has been added to our mailing list!";
    }
    b.append(ms);
    email.value = "";
}
});
