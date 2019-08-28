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
router.get("/info",(req,res)=>{
  console.log("obteniendo ubicacion info");
  let response = ubicaciones[0];
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(response));
})
  router.get("/", async (req, res) => {
    let idpiloto = req.param("idpiloto");
    console.log("ENTRE A UBICACION: " + idpiloto);
    res.end(JSON.stringify(ubicaciones[idpiloto]));
  });
  return router;
};
