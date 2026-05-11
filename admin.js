// admin.js

import {
db
}
from "./firebase.js";

import {
ref,
onValue
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const paymentList =
document.getElementById("paymentList");

onValue(ref(db,"payments"),(snapshot)=>{

paymentList.innerHTML="";

snapshot.forEach((child)=>{

const data = child.val();

paymentList.innerHTML += `

<div class="history-item">

TRX: ${data.trxId}<br>

Amount: ${data.amount}<br>

Status: ${data.status}

</div>

`;

});

});
