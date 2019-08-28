const { Router } = require("express");
const { clientes } = require("./data");
module.exports = (router = new Router()) => {
  /*
    endpoint para solicitar viaje por parte de un cliente
    parametros a recibir:
        ->id del cliente
    tipo resuesta:json
    formato respuesta: {idpiloto:777,Nombre:"..."}

 */
  router.get("/info",(req,res)=>{
    console.log("obteniendo cliente info");
    let response = clientes[0];
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(response));
  })
  router.get("/asignar-piloto", async (req, res) => {
    let idcliente = req.param("id");
    let idpiloto = req.param("idpiloto");
    console.log("ENTRE A ASIGNAR-PILOTO al cliente: " + idcliente);
    clientes[idcliente].idpiloto = idpiloto;
    res.end("piloto asignado");
  });
  return router;
};
