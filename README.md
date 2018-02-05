#Backend VapePlanner

Un back-end realizado sobre la arquitectura REST al que se conecta desde un cliente Android. Este back-end es capaz de crear, actualizar, borrar y listar Líquidos, Aromas, Bases y líquidos prefabricados en una base de datos MongoDB.

Tiene capacidad de autentificación usando tokens y clasifica la información por usuarios haciendo que los datos se mantengan desde cualquier cliente desde el que se conecte el usuario.

##Librerías utilizadas

- JSON Web Tokens
- Mongoose
- Express
- BCrypt
- Nodemon
- Body-Parser

##Requisitos previos

- NodeJS v8.9.4 o superior
- MongoDB v3.6.2 o superior
- NPM v5.6.0 o superior
- Postman, RESTed, RESTClient o algún cliente para conectarse a la API

> **NOTA:** Las versiones aquí indicadas son las que se usaron a la hora de crear este proyecto, no garantizamos su correcto funcionamiento con versiones anteriores.

##Set-Up inicial

Clonamos el proyecto en un directorio a elegir

`git clone https://jruanogalvez@gitlab.iesvirgendelcarmen.com/jruanogalvez/VapePlanner_backend.git`

Accedemos a la capeta del proyecto

`cd VapePlanner_backend`

Instalamos las dependencias necesarias

`npm install`

Y ejecutamos el archivo del servidor

`nodemon server.js` / `node server.js` / `npm start`

##Créditos

Creado por Jose María Ruano Gálvez y Óscar Caparrós Tortosa para las asignaturas de:

- Desarrollo de Interfaces
- Programación de Servicios y Procesos
