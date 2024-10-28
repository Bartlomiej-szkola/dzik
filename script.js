const h1Liczba = document.getElementById('h1Liczba')
let numer = 0
const start = Date.now()
let ostatniaLiczba = Date.now()
let czyNalezyKliknac = false
let czyKlikniętoDzika = false
let kliknieciaCzasReakcji = {}

function kolejnyNumer(){
    if(czyNalezyKliknac && !czyKlikniętoDzika){
        // alert("Nie kliknięto dzika")
        // clearInterval(numerInterval)
    }
    if(numer>9){
        clearInterval(numerInterval)
        numerInterval = setInterval(kolejnyNumer, 1250)
    }
    if(numer>19){
        clearInterval(numerInterval)
        numerInterval = setInterval(kolejnyNumer, 1000)
    }
    if(numer>30){
        clearInterval(numerInterval)
        numerInterval = setInterval(kolejnyNumer, 900)
    }
    if(numer>50){
        clearInterval(numerInterval)
        numerInterval = setInterval(kolejnyNumer, 850)
    }
    if(numer>65){
        clearInterval(numerInterval)
        numerInterval = setInterval(kolejnyNumer, 800)
    }
    if(numer>80){
        clearInterval(numerInterval)
        numerInterval = setInterval(kolejnyNumer, 750)
    }

    numer++
    ostatniaLiczba = Date.now();
    czyKlikniętoDzika = false;
    czyNalezyKliknac = czyMa7(numer)
    h1Liczba.innerHTML = numer
}
let numerInterval = setInterval(kolejnyNumer, 1500)

function dzik(){
    const audio = new Audio('dzik1.wav');
    audio.play();
    if(czyNalezyKliknac && !czyKlikniętoDzika){
        let czasReakcjiLiczby = czasReakcji()
        kliknieciaCzasReakcji[numer] = czasReakcjiLiczby
        console.log("Liczba " + numer + " czas reakcji: " + czasReakcjiLiczby)
        czyKlikniętoDzika = true
    }
    else if(czyKlikniętoDzika){
        console.log("Powtórnie kliknieto dzika dla liczby: " + numer)
    }
    else{
        // alert("W tym numerze nie nalezalo kliknac dzika")
        // clearInterval(numerInterval)
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

// Dodawanie każdego pojedyńczego rzędu po każdym kliknięciu
// const tabela = document.getElementById("tabelaCzasyReakcji")
// function dodajDoTabeli(){
//     let tr = document.createElement("tr")
//     let td = document.createElement("td")
//     td.innerText = "tekst"
//     tr.appendChild(td)
//     tabela.appendChild(tr)
// }

// Generowanie tabeli na końcu gry
const tabela = document.getElementById("tabelaCzasyReakcji")
function generujTabeleCzasowReakcji(){
    let iloscCzasow = 0
    let sumaCzasow = 0
    for (let numer in kliknieciaCzasReakcji) {
        if (kliknieciaCzasReakcji.hasOwnProperty(numer)) {
            iloscCzasow++
            sumaCzasow+=kliknieciaCzasReakcji[numer]

            console.log(`${numer}: ${kliknieciaCzasReakcji[numer]}`);

            let tr = document.createElement("tr")
            let poleNumer = document.createElement("td")
            poleNumer.innerText = numer

            let poleCzasReakcji = document.createElement("td")
            poleCzasReakcji.innerText = kliknieciaCzasReakcji[numer]
            
            tr.appendChild(poleNumer)
            tr.appendChild(poleCzasReakcji)
            tabela.appendChild(tr)
        }
    }
    
    let srednia = sumaCzasow / iloscCzasow
    let tr = document.createElement("tr")
    let poleSrednia = document.createElement("td")
    poleSrednia.id = "srednia"
    poleSrednia.innerText = srednia
    tr.appendChild(poleSrednia)
    tabela.appendChild(tr)
    
}

// setInterval(function() {
//     var delta = Date.now() - start;

//     console.log(Math.floor(delta / 10));

//     console.log(new Date().toUTCString());
// }, 10); 