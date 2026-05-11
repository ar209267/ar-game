// auth.js

import {
auth
}
from "./firebase.js";

import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
sendEmailVerification
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const registerBtn =
document.getElementById("registerBtn");

const loginBtn =
document.getElementById("loginBtn");

registerBtn.addEventListener("click",()=>{

const email =
document.getElementById("email").value;

const password =
document.getElementById("password").value;

if(password.length < 6){

alert("Password Minimum 6 Characters");

return;

}

createUserWithEmailAndPassword(auth,email,password)

.then((userCredential)=>{

sendEmailVerification(userCredential.user);

alert("Verification Email Sent");

})

.catch((error)=>{

alert(error.message);

});

});

loginBtn.addEventListener("click",()=>{

const email =
document.getElementById("email").value;

const password =
document.getElementById("password").value;

signInWithEmailAndPassword(auth,email,password)

.then(()=>{

window.location.href="dashboard.html";

})

.catch((error)=>{

alert(error.message);

});

});
