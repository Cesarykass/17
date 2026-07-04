/*==========================================
    ELEMENTOS
==========================================*/

const envelope = document.getElementById("envelope");
const flap = document.getElementById("flap");
const letter = document.getElementById("letter");
const seal = document.getElementById("seal");
const hint = document.querySelector(".hint");

const miniEnvelope = document.getElementById("miniEnvelope");

const hiddenSections = document.querySelectorAll(".hidden");

const secretMessage = document.getElementById("secretMessage");

/*==========================================
    VARIABLES
==========================================*/

let opened = false;

/*==========================================
    ABRIR SOBRE PRINCIPAL
==========================================*/

envelope.addEventListener("click",()=>{

    if(opened) return;

    opened = true;

    // Romper sello

    seal.style.transform =
    "translateX(-50%) scale(0) rotate(180deg)";

    seal.style.opacity = "0";

    // Abrir tapa

    setTimeout(()=>{

        flap.classList.add("open");

    },350);

    // Sacar carta

    setTimeout(()=>{

        letter.classList.add("show");

    },900);

    // Mostrar mensaje

    setTimeout(()=>{

        hint.innerHTML = "Desliza hacia abajo ❤️";

    },1800);

    // Mostrar secciones

    setTimeout(()=>{

        hiddenSections.forEach(section=>{

            section.style.display="block";

        });

    },2000);

});

/*==========================================
    OBSERVER
==========================================*/

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

},{

threshold:.15

});

hiddenSections.forEach(section=>{

observer.observe(section);

});

/*==========================================
    MINI SOBRE
==========================================*/

miniEnvelope.addEventListener("click",()=>{

document.getElementById("finalLetter")

.scrollIntoView({

behavior:"smooth"

});

});

/*==========================================
    FLORES
==========================================*/

const petals = document.getElementById("petals");

for(let i=0;i<45;i++){

const flower=document.createElement("span");

flower.className="flower";

flower.innerHTML="🌸";

flower.style.left=Math.random()*100+"vw";

flower.style.animationDuration=

(10+Math.random()*8)+"s";

flower.style.animationDelay=

Math.random()*8+"s";

flower.style.fontSize=

(18+Math.random()*14)+"px";

petals.appendChild(flower);

}

/*==========================================
    MENSAJE OCULTO
==========================================*/

let idleTimer;

document.addEventListener("mousemove",()=>{

secretMessage.style.opacity="0";

clearTimeout(idleTimer);

idleTimer=setTimeout(()=>{

secretMessage.style.opacity="1";

},8000);

});
/*==========================================
    POLAROIDS
==========================================*/

const polaroids = document.querySelectorAll(".polaroid");

const photoObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{

opacity:0,

transform:"translateY(80px) rotate(-10deg)"

},

{

opacity:1,

transform:"translateY(0) rotate(0deg)"

}

],{

duration:900,

fill:"forwards",

easing:"ease-out"

});

photoObserver.unobserve(entry.target);

}

});

},{

threshold:.2

});

polaroids.forEach(photo=>{

photoObserver.observe(photo);

});

/*==========================================
    CORAZONES
==========================================*/

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=(window.innerWidth/2)+"px";

heart.style.top="230px";

heart.style.fontSize="22px";

heart.style.pointerEvents="none";

heart.style.zIndex="999";

document.body.appendChild(heart);

const x=(Math.random()*220)-110;

const y=-220-(Math.random()*120);

heart.animate([

{

transform:"translate(0,0) scale(.5)",

opacity:1

},

{

transform:`translate(${x}px,${y}px) scale(1.4)`,

opacity:0

}

],{

duration:1800,

easing:"ease-out"

});

setTimeout(()=>{

heart.remove();

},1800);

}

envelope.addEventListener("click",()=>{

for(let i=0;i<14;i++){

setTimeout(createHeart,i*120);

}

});

/*==========================================
    ESTRELLAS
==========================================*/

function createStar(){

const star=document.createElement("span");

star.innerHTML="⭐";

star.style.position="fixed";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.opacity="0";

star.style.pointerEvents="none";

star.style.fontSize=(10+Math.random()*10)+"px";

document.body.appendChild(star);

star.animate([

{

opacity:0

},

{

opacity:.8

},

{

opacity:0

}

],{

duration:5000,

iterations:Infinity

});

}

/*==========================================
    ATARDECER
==========================================*/

window.addEventListener("scroll",()=>{

const end=document.querySelector(".ending");

const rect=end.getBoundingClientRect();

if(rect.top<window.innerHeight){

document.body.style.transition="2s";

document.body.style.background=

"linear-gradient(#ffd9e8,#ffc9dd,#d8b4ff,#8093f1)";

}

});

/*==========================================
    CREAR ESTRELLAS
==========================================*/

for(let i=0;i<45;i++){

setTimeout(createStar,i*120);

}