// app.js

import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getAuth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {

apiKey: "YOUR_API_KEY",

authDomain: "YOUR_DOMAIN",

projectId: "YOUR_PROJECT_ID",

storageBucket: "YOUR_BUCKET",

messagingSenderId: "YOUR_MSG_ID",

appId: "YOUR_APP_ID"

};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

window.addEventListener("load",()=>{

setTimeout(()=>{
document.getElementById("loader").style.display="none";
},1500);

});

function showToast(text){

const toast=document.getElementById("toast");

toast.innerText=text;

toast.style.display="block";

setTimeout(()=>{
toast.style.display="none";
},3000);

}

window.buyService=(name)=>{

showToast(name+" Ordered Successfully");

};

document.getElementById("depositBtn")
.addEventListener("click",()=>{

const trx=document.getElementById("trx").value;

const amount=document.getElementById("amount").value;

if(trx=="" || amount==""){

showToast("সব তথ্য দিন");

return;

}

showToast("Deposit Request Sent");

});

document.getElementById("registerBtn")
.addEventListener("click",()=>{

const email=document.getElementById("email").value;

const password=document.getElementById("password").value;

createUserWithEmailAndPassword(auth,email,password)

.then(()=>{

showToast("Account Created");

})

.catch((error)=>{

showToast(error.message);

});

});

document.getElementById("loginBtn")
.addEventListener("click",()=>{

const email=document.getElementById("email").value;

const password=document.getElementById("password").value;

signInWithEmailAndPassword(auth,email,password)

.then(()=>{

showToast("Login Success");

})

.catch((error)=>{

showToast(error.message);

});

});
