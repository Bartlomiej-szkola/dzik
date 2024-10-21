const h1Liczba = document.getElementById('h1Liczba')
var numer = 0
var start = Date.now();
var ostatniaLiczba = Date.now();

function kolejnyNumer(){
    numer++
    ostatniaLiczba = Date.now();
    h1Liczba.innerHTML = numer
    if(numer%7 == 0 || numer.toString().split("").includes('7')){
        console.log("a")
    }
}
setInterval(kolejnyNumer, 1000)

function dzik(){
    alert(czasReakcji)
}



function czasReakcji(){
    let delta = Date.now() - ostatniaLiczba;
    return delta;
}

// setInterval(function() {
//     var delta = Date.now() - start;

//     console.log(Math.floor(delta / 10));

//     console.log(new Date().toUTCString());
// }, 10); 