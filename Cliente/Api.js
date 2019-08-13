const { Router } = require("express");
const { clientes } = require("./data");
const https = require("http");
module.exports = (router = new Router()) => {
  router.get("/Autor", async (req, res) => {
    console.log("ENTRE A SALUDO");
    //console.log(req.params);
    //console.log(req.body);
    //console.log(req.query);
    response = {
      author: "Byron",
      mess: "Hola!",
      id: "777"
    };

    res.end(JSON.stringify(response));
  });
  /*
    endpoint para solicitar viaje por parte de un cliente
    parametros a recibir:
        ->id del cliente
    tipo resuesta:json
    formato respuesta: {idpiloto:777,Nombre:"..."}

 */
  router.get("/asignar-piloto", async (req, res) => {
    let idcliente = req.param("id");
    let idpiloto = req.param("idpiloto");
    console.log("ENTRE A ASIGNAR-PILOTO al cliente: " + idcliente);
    clientes[idcliente].idpiloto = idpiloto;
    res.end("piloto asignado");
  });
  return router;
};
