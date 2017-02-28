var prom1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Promesa terminada");
        //Termina bien
        resolve();
        //Termina mal
        //reject()
    }, 1500);
});
console.log("Paso 01");
prom1.then(function () {
    console.log("ejecutame cuando termine bien");
}, function () {
    console.error("Ejecutar si todo sale mal");
});
console.log("Paso 02");
