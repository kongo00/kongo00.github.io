// ============================
// SCROLL REVEAL
// ============================


const items = document.querySelectorAll(
".link, .box, h2, .avatar, .profile h1, .profile p"
);


const observer = new IntersectionObserver((entries)=>{

entries.forEach(item=>{

if(item.isIntersecting){

item.target.classList.add("show");

}

});

},{
threshold:0.05
});


items.forEach(item=>{

item.classList.add("hidden");

observer.observe(item);

});




// ============================
// KURSOR ŚWIATŁA
// ============================


const cursor = document.createElement("div");

cursor.className="cursorGlow";

document.body.appendChild(cursor);


let mouseX=0;
let mouseY=0;

let currentX=0;
let currentY=0;



document.addEventListener("mousemove",(e)=>{

mouseX=e.clientX;
mouseY=e.clientY;

});



function animateCursor(){

currentX += (mouseX-currentX)*0.08;
currentY += (mouseY-currentY)*0.08;


cursor.style.left=currentX+"px";
cursor.style.top=currentY+"px";


requestAnimationFrame(animateCursor);

}


animateCursor();




// ============================
// RUCH TŁA
// ============================


const lights=document.querySelectorAll(".light");


document.addEventListener("mousemove",(e)=>{


let x=e.clientX/window.innerWidth;
let y=e.clientY/window.innerHeight;


lights.forEach((light,index)=>{


light.style.transform=
`
translate(
${x*40*(index+1)}px,
${y*40*(index+1)}px
)

scale(${1+x/5})
`;

});


});




// ============================
// AVATAR 3D
// ============================


const avatar=document.querySelector(".avatar");


document.addEventListener("mousemove",(e)=>{


if(!avatar)return;


let rotateX =
(e.clientY/window.innerHeight-0.5)*20;


let rotateY =
(e.clientX/window.innerWidth-0.5)*20;



avatar.style.transform=
`
perspective(600px)
rotateX(${-rotateX}deg)
rotateY(${rotateY}deg)
scale(1.05)
`;


});




// ============================
// MAGNETYCZNE LINKI
// ============================


const links=document.querySelectorAll(".link");


links.forEach(link=>{


link.addEventListener("mousemove",(e)=>{


let box=link.getBoundingClientRect();


let x=e.clientX-box.left-box.width/2;

let y=e.clientY-box.top-box.height/2;


link.style.transform=
`
translate(
${x/8}px,
${y/8}px
)
scale(1.05)
`;



});



link.addEventListener("mouseleave",()=>{


link.style.transform="";


});


});




// ============================
// FAJERWERKI PO KLIKNIĘCIU
// ============================


document.addEventListener("click",(e)=>{


for(let i=0;i<8;i++){


let particle=document.createElement("span");


particle.className="particle";


particle.style.left=e.clientX+"px";

particle.style.top=e.clientY+"px";


particle.style.setProperty(
"--x",
(Math.random()*200-100)+"px"
);


particle.style.setProperty(
"--y",
(Math.random()*200-100)+"px"
);



document.body.appendChild(particle);



setTimeout(()=>{

particle.remove();

},800);


}



});




// ============================
// PŁYNNE ŁADOWANIE STRONY
// ============================


window.addEventListener("load",()=>{


document.body.classList.add("loaded");


});