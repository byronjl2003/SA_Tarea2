const { Router } = require("express");
/*
 * ubicaciones: estructura de datos para ubicaciones estaticas
 */
const { ubicaciones } = require("./data");

module.exports = (router = new Router()) => {
  /*
  * endpoint para solicitar ubicacion de un piloto
  * parametros a recibir:
  *     ->id del piloto
  * tipo resuesta:json
  * formato respuesta: {idpiloto:777,Nombre:"..."}

 */
  router.get("/", async (req, res) => {
    let idpiloto = req.param("idpiloto");
    console.log("ENV:: "+process.env.HOST);
    console.log(typeof process.env.HOST);
    console.log("ENTRE A UBICACION: " + idpiloto);

    res.end(JSON.stringify(ubicaciones[idpiloto]));
  });
  router.get("/python", async (req, res) => {
    const { spawn } = require('child_process');
    const pyProg = spawn('python', [__dirname+"/hellow.py"]);

    pyProg.stdout.on('data', function(data) {

        console.log(data.toString());
        //res.write(data);
        res.end(JSON.stringify({mensaje:data.toString()}));
    });
    
  });
  return router;

};
