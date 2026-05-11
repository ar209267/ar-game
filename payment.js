// payment.js

import {
db
}
from "./firebase.js";

import {
ref,
push
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const depositBtn =
document.getElementById("depositBtn");

depositBtn.addEventListener("click",()=>{

const trx =
document.getElementById("trx").value;

const amount =
document.getElementById("amount").value;

if(trx=="" || amount==""){

alert("সব তথ্য দিন");

return;

}

push(ref(db,"payments"),{

trxId: trx,

amount: amount,

status: "Pending",

time: Date.now()

});

alert("Deposit Request Submitted");

});
