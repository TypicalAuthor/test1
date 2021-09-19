let time = document.getElementById("hora");
let alerta = document.getElementById("alertas");
let boton = document.getElementById("boton");
function timedocument () {
    let timedata = new Date();
    time.textContent = timedata;
    seconds = timedata.getSeconds();
    if(seconds == 0) {
        alerta.textContent = alerta.textContent + " " + "Alerta!";
    };
};
let actualizador = setInterval(timedocument, 1000);
boton.addEventListener("click", function(){
    alerta.textContent = "";
});