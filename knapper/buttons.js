const backgroundChange = document.querySelector('#bgchange')
const body = document.body
const skrift = document.querySelector('#addtext')
const tekst = document.querySelector('#lorem')
const colortekst = document.querySelector('#textcolor')
const alertt = document.querySelector('#alerts')
const lyd= document.querySelector('#image')
const audio = new Audio('mixkit-classic-alarm-995.wav');
const streng = document.querySelector('#strings')
const fonts = document.querySelector('#font')



diddy.addEventListener('click', diddyfest)
colortekst.addEventListener('click', change)
backgroundChange.addEventListener('click', changebg)
skrift.addEventListener('click', addlorem )
alertt.addEventListener('click', boxes )
lyd.addEventListener('click', sound )
streng.addEventListener('click', strenge)
fonts.addEventListener('click', fontchange)

function changebg(){
body.style.backgroundColor = 'green'
}
function addlorem(){
    tekst.textContent='din far'
}
function change(){
    tekst.style.backgroundColor = 'red'
}

function boxes(){
    alert("Hello! I am an alert box!!");
    
}
function sound(){
    
    audio.play();
} 
function strenge(){
tekst.textContent='p diddy fest'
}

function fontchange(){
    tekst.style.fontFamily = "Fantasy"
}

