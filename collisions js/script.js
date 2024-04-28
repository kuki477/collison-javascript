let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext("2d");

// canvas.width = innerWidth;
// canvas.height = innerHeight;

const kursor = {
    // x: innerWidth/2,
    // y: innerHeight/2

    x: canvas.width, //2
    y: canvas.height //2
}

//funkcja sprawdzajaca gdzie znajduje sie kursor
addEventListener("mousemove", sprawdzPozycje);
function sprawdzPozycje(event){
    kursor.x = event.clientX;
    kursor.y = event.clientY;
    //console.log("x:y współrzędne "+ kursor.x,": "+ kursor.y); //wyświetlanie współrzędnych w konsoli
}





function animacja(){
requestAnimationFrame(animacja);

let drugiKwadratX = canvas.width / 2.5; // pozycja x
let drugiKwadratY = canvas.height / 2.5; // pozycja y

let pozycjaX = canvas.width / 4;
let pozycjaY = canvas.height / 1;


//tło
ctx.fillStyle = "#16022b";
ctx.fillRect(0, 0, canvas.width, canvas.height);

//kwadrat pierwszy
var s1 = ctx.fillStyle = "#eb4034";
ctx.fillRect(kursor.x - 50, kursor.y - 50, 100, 100);

//kwadrat drugi
var s2 = ctx.fillStyle = "#04b80a";
//(x, y, r, r,)
ctx.fillRect(drugiKwadratX, drugiKwadratY, 100, 100);



//system kolizji
if(
   kursor.x - 50 + 100 >= drugiKwadratX &&
   kursor.x - 50 <= drugiKwadratX + 100 &&
   kursor.y - 50 + 100 >= drugiKwadratY &&
   kursor.y - 50 <= drugiKwadratY + 100
){
    //tekst kolizja
    ctx.textAlign = "center";
    ctx.textBaseline = "bottom";
    ctx.font = "normal 40px Arial";
    ctx.fillText("KOLIZJA", pozycjaX, pozycjaY);


    //kwadrat pierwszy
    s1 = ctx.fillStyle = "#d40882"
    ctx.fillRect(kursor.x - 50, kursor.y - 50, 100, 100);

    //kwadrat drugi
    s2 = ctx.fillStyle = "#ffffff"
    ctx.fillRect(drugiKwadratX, drugiKwadratY, 100, 100);

    console.log('kolizja');
}else{
    ctx.textAlign = "center";
    ctx.textBaseline = "bottom";
    ctx.font = "normal 40px Arial";
    ctx.fillText("BRAK KOLIZJI", pozycjaX, pozycjaY);

    console.log('brak kolizji');
}


}
animacja();