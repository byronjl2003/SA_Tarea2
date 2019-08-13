const { Router } = require("express");
const https = require("http");
const {pilotos} = require("./data");

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
  router.get("/", async (req, res) => {
    let idcliente = req.param('id');
    console.log("Se va a devolver un piloto");
    console.log(pilotos);
    let response;
    let i=0;
    let piloto;
    while(true){
      piloto = pilotos[i];
      if(typeof piloto == 'undefined'){
        response = {id:-1,mess:"pilotos no disponibles"}
        break;
      }
      else{
        if(piloto.idcliente ==-1){
          piloto.idcliente = idcliente;
          response = piloto;
          break;
        }

      }
      i++;
    }
    
    res.end(JSON.stringify(response));
  });
  router.get("/rastrear", async (req, res) => {
    let idcliente = req.param('idcliente');
    console.log("piloto asociado al cliente "+idcliente);
    console.log(pilotos);
    let response;
    let i=0;
    let piloto;
    while(true){
      piloto = pilotos[i];
      if(typeof piloto == 'undefined'){
        response = {id:-1,mess:"pilotos no disponibles"}
        break;
      }
      else{
        if(piloto.idcliente == idcliente){
          response = piloto;
          break;
        }

      }
      i++;
    }
    res.end(JSON.stringify(response));
  });
  return router;
};
