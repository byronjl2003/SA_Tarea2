# Documentacion Tarea 2
# Softaware avanzado - USAC
## Componentes de la solucion
## 1.ESB
<p>Endpoints</p>
<dl>
  <dt>
  <h5>- solicitar viaje</h6>
  </dt>
  <dd>
  Endpoint disponible en el ESB para solicitar servicio de Uber para un determinado cliente.
  <p>Parametros:</p>
  <table>
  <tr>
  <th>nombre</th>
  <th>descripcion</th>
  </tr>
  <tr>
  <td>id</td>
  <td>
  id del cliente que solicita el viaje
  </td>
  </tr>
  </table>
  <p>Ejemplo de url:</p>
  <dd>http://localhost:5001/solicitar-viaje?id=1</dd>
  </dd>

  <dt>
  <h5>- rastrear</h6>
  </dt>
  <dd>
  Endpoint disponible en el ESB para rastrear el piloto asociado a un cliente.
  <p>Parametros:</p>
  <table>
  <tr>
  <th>nombre</th>
  <th>descripcion</th>
  </tr>
  <tr>
  <td>id</td>
  <td>
  id del cliente que tiene asociado el piloto que se desea rastrear
  </td>
  </tr>
  </table>
  <p>Ejemplo de url:</p>
  <dd>http://localhost:5001/rastrear?id=1</dd>
  </dd>
</dl>
 

---
## 2.Servicios
### 1.Cliente
---
### 2.Piloto
---
### 3.Ubicacion
---
---
## Diagramas
Solicitud de uber: La solicitud de uber sigue el siguiente flujo.
1. El ESB recibe una solicitud de viaje.
2. El ESB internamente accede al recurso de pilotos y obtiene un piloto disponible y le asigna a dicho piloto el id del cliente.
3. El ESB ya sabiendo el id del piloto a asignar accede al recurso de los clientes y procede a asignar al cliente el piloto y devulve un mensaje de confirmacion del chofer.
 

![diagrama][logo]

[logo]: https://github.com/byronjl2003/SA_Tarea2/blob/master/diagramas/solicitud-servicio.png?raw=true "solicitud de uber"

rastreo: El rastreo consiste del siguiente flujo.
1. El ESB recibe una solicitud de rastreo.
2. El ESB internamente accede al recurso de pilotos y obtiene el piloto asociado al id del cliente.
3. El ESB accede al recursode ubicaciones y obtiene la ubicacion asociado al id del pioto.

![diagrama][logo]

[logo]: https://github.com/byronjl2003/SA_Tarea2/blob/master/diagramas/servicio-rastrear.png?raw=true "solicitud de rastreo"
---
## Arbol del proyecto
```
SA_Tarea2
├─ .gitignore
├─ Cliente
│  ├─ Api.js
│  ├─ Dockerfile
│  ├─ data.js
│  ├─ package-lock.json
│  ├─ package.json
│  └─ server.js
├─ ESB
│  ├─ Api.js
│  ├─ Dockerfile
│  ├─ package-lock.json
│  ├─ package.json
│  └─ server.js
├─ Piloto
│  ├─ Api.js
│  ├─ Dockerfile
│  ├─ data.js
│  ├─ package-lock.json
│  ├─ package.json
│  └─ server.js
├─ Ubicacion
│  ├─ Api.js
│  ├─ Dockerfile
│  ├─ data.js
│  ├─ package-lock.json
│  ├─ package.json
│  └─ server.js
└─ docker-compose.yml

```