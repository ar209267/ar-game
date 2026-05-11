// firebase.js

import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getDatabase }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

import { getAnalytics }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

const firebaseConfig = {

apiKey: "AIzaSyC5i7SOEJeFO8NsO7VbIU63rfRBrGwBWQY",

authDomain: "online-shop-ar.firebaseapp.com",

projectId: "online-shop-ar",

storageBucket: "online-shop-ar.firebasestorage.app",

messagingSenderId: "913434308973",

appId: "1:913434308973:web:d0b1f8f7dda8c64f586a64",

measurementId: "G-T20TRS2F59"

};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const auth = getAuth(app);

export const db = getDatabase(app);
