const { Router } = require("express");
/*
 * pilotos: estructura de datos para pilotos estaticas
 */
const { pilotos } = require("./data");

module.exports = (router = new Router()) => {
  /*
  * Endpoint para obtener un piloto disponible.
  * ambien se le asigna al piloto el cliente
  * parametros a recibir:
        ->id:id del cliente
  * tipo resuesta:json
  * formato respuesta: {idpiloto:777,Nombre:"..."}

 */
  router.get("/", async (req, res) => {
    let idcliente = req.param("id");
    let response;
    let i = 0;
    let piloto;
    while (true) {
      piloto = pilotos[i];
      if (typeof piloto == "undefined") {
        response = { id: -1, mess: "pilotos no disponibles" };
        break;
      } else {
        if (piloto.idcliente == -1) {
          piloto.idcliente = idcliente;
          response = piloto;
          break;
        }
      }
      i++;
    }

    res.end(JSON.stringify(response));
  });
  /*
  * Endpoint para obtener ubicacion de un piloto.
  
  * parametros a recibir:
        ->idcliente:id del cliente
  * tipo resuesta:json
  * formato respuesta: {idpiloto:777,Nombre:"..."}

 */
  router.get("/rastrear", async (req, res) => {
    let idcliente = req.param("idcliente");
    console.log(idcliente);
    console.log(pilotos);
    let response;
    let i = 0;
    let piloto;
    while (true) {
      piloto = pilotos[i];
      if (typeof piloto == "undefined") {
        response = { id: -1, mess: "piloto no tiene asociado un cliente" };
        break;
      } else {
        if (piloto.idcliente == idcliente) {
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
