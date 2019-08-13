const { Router } = require("express");
const { ubicaciones } = require("./data");

module.exports = (router = new Router()) => {
  
  /*
    endpoint para solicitar ubicacion de un piloto
    parametros a recibir:
        ->id del cliente
    tipo resuesta:json
    formato respuesta: {idpiloto:777,Nombre:"..."}

 */
  router.get("/", async (req, res) => {
    let idpiloto = req.param("idpiloto");
    console.log("ENTRE A UBICACION: " + idpiloto);
    res.end(JSON.stringify(ubicaciones[idpiloto]));
  });
  return router;
};