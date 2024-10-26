const h1Liczba = document.getElementById('h1Liczba')
let numer = 0
const start = Date.now()
let ostatniaLiczba = Date.now()
let czyNalezyKliknac = false
let czyKlikniętoDzika = false

function kolejnyNumer(){
    if(czyNalezyKliknac && !czyKlikniętoDzika){
        alert("Nie kliknięto dzika")
        clearInterval(numerInterval)
    }

    numer++
    ostatniaLiczba = Date.now();
    czyKlikniętoDzika = false;
    czyNalezyKliknac = czyMa7(numer)
    h1Liczba.innerHTML = numer
}
const numerInterval = setInterval(kolejnyNumer, 500)

function dzik(){
    const audio = new Audio('dzik1.wav');
    audio.play();
    if(czyNalezyKliknac){
        console.log(czasReakcji())
        czyKlikniętoDzika = true
    }
    else{
        alert("W tym numerze nie nalezalo kliknac dzika")
        clearInterval(numerInterval)
    }
}

function playAudio(url) {
    new Audio(url).play();
  }

function czyMa7(numer){
    if(numer%7 == 0 || numer.toString().split("").includes('7')){
        return true
    }
    return false
}


function czasReakcji(){
    let delta = Date.now() - ostatniaLiczba;
    return delta
}

// setInterval(function() {
//     var delta = Date.now() - start;

//     console.log(Math.floor(delta / 10));

//     console.log(new Date().toUTCString());
// }, 10); 