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
    const { exec } = require('child_process');
    exec("python "+__dirname+"/hellow.py", (err, stdout, stderr) => {
      if (err) {
        //some err occurred
        console.error(err);
        res.end(JSON.stringify(err));
        
      } else {
        // the *entire* stdout and stderr (buffered)
        res.end(JSON.stringify({mess:"okkkk"}));
        
      }
    });

    
  });
  return router;

};
