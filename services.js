// services.js

const services = [

{
name:"Facebook Followers",
price:"130",
icon:"fab fa-facebook"
},

{
name:"Facebook Likes",
price:"80",
icon:"fab fa-facebook"
},

{
name:"Facebook Comments",
price:"120",
icon:"fab fa-facebook"
},

{
name:"Instagram Followers",
price:"95",
icon:"fab fa-instagram"
},

{
name:"Instagram Reels Views",
price:"60",
icon:"fab fa-instagram"
},

{
name:"YouTube Subscribers",
price:"850",
icon:"fab fa-youtube"
},

{
name:"YouTube Likes",
price:"90",
icon:"fab fa-youtube"
},

{
name:"TikTok Views",
price:"90",
icon:"fab fa-tiktok"
},

{
name:"Telegram Members",
price:"120",
icon:"fab fa-telegram"
},

{
name:"Twitter Growth",
price:"500",
icon:"fab fa-twitter"
},

{
name:"Spotify Plays",
price:"200",
icon:"fab fa-spotify"
},

{
name:"Website Traffic",
price:"300",
icon:"fa-solid fa-globe"
},

{
name:"Free Fire Diamonds",
price:"720",
icon:"fa-solid fa-gem"
}

];

const container =
document.getElementById("serviceContainer");

services.forEach(service=>{

container.innerHTML += `

<div class="service-box">

<i class="${service.icon}"></i>

<h4>${service.name}</h4>

<span>৳ ${service.price}</span>

<button onclick="buyNow('${service.name}')">
Order
</button>

</div>

`;

});

window.buyNow=(name)=>{

alert(name+" Ordered");

};
