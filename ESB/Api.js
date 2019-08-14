const { Router } = require("express");
const https = require("http");
module.exports = (router = new Router()) => {
  router.get("/Autor", async (req, res) => {
    console.log("ENTRE A SALUDO");

    response = {
      author: "Byron Lopez",
      mess: "Hola!",
      id: "777"
    };

    res.end(JSON.stringify(response));
  });
  /*
  *
  *
    endpoint para solicitar viaje por parte de un cliente
    parametros a recibir:
        ->id del cliente
    tipo resuesta:json
    formato respuesta: {idpiloto:777,Nombre:"..."}
    1.Obtiene los datos de un piloto disponible, a ese piloto se le asigna el cliente?
    2.Al cliente se le asigna un piloto.
  *
  *
  */
  router.get("/solicitar-viaje", async (req, res) => {
    console.log("ENTRE A SOLICITAR-VIAJE");
    let idcliente = req.param("id");
    let response;
    console.log("id del cliente solicitante " + idcliente);
    //1.

    https
      .get("http://piloto:5002/?id=" + idcliente, resp => {
        let data = "";

        resp.on("data", chunk => {
          data += chunk;
        });

        resp.on("end", () => {
          console.log(data);
          let resppiloto = JSON.parse(data);
          //2.
          if (resppiloto.id == -1) {
            response = {
              mess: "ocurrio un error"
            };
          } else {
            https
              .get(
                "http://cliente:5000/asignar-piloto?id=" +
                  idcliente +
                  "&idpiloto=" +
                  resppiloto.id,
                resp => {
                  let data = "";
                  resp.on("data", chunk => {
                    data += chunk;
                  });
                  resp.on("end", () => {
                    console.log(data);
                  });
                }
              )
              .on("error", err => {
                console.log("Error: " + err.message);
              });
            response = {
              mess: "tu piloto asignado es " + resppiloto.nombre,
              idpiloto: resppiloto.id,
              idcliente: idcliente
            };
          }

          res.end(JSON.stringify(response));
        });
      })
      .on("error", err => {
        console.log("Error: " + err.message);
        rsponse = { error: err.message };
        res.end(JSON.stringify(response));
      });
  });
  /*
  *
  *
  endpoint para solicitar la localizacion del piloto asignado a un cliente
  parametros a recibir:
        ->id del cliente
    tipo resuesta:json
    formato respuesta: {latitud:9999,longitud:6666}
    1.Obtiene el id del piloto asociado al cliente
    2.Obtiene la ubicacion del piloto del servicio de ubicacion

  */
 router.get("/rastrear",async(req,res)=> {
  console.log("ENTRE A RASTREAR");
  let idcliente = req.param("id");
  console.log("id del cliente " + idcliente);
  //1.
  let response;
  https
    .get("http://piloto:5002/rastrear?idcliente="+idcliente, resp => {
      let data = "";
      resp.on("data", chunk => {
        data += chunk;
      });

      resp.on("end", () => {
        console.log(data);
        let resppiloto = JSON.parse(data);
        //2.
        https
          .get(
            "http://ubicacion:5003/?idpiloto="+resppiloto.id,
            resp => {
              let data = "";
              resp.on("data", chunk => {
                data += chunk;
              });
              resp.on("end", () => {
                console.log(data);
                response = JSON.parse(data);
                res.end(JSON.stringify(response));
                
              });
            }
          )
          .on("error", err => {
            console.log("Error: " + err.message);
          });
        //termina 2
        
        
      });
    })
    .on("error", err => {
      console.log("Error: " + err.message);
      rsponse = { error: err.message };
      res.end(JSON.stringify(response));
    });

});
return router;
};
