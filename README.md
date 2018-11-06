# Backend VapePlanner

> **NOTA:** Esta API debería ir acompañada de una aplicación Android Nativa, este proyecto es simplemente para demostración, no se trabajará en su mantenimiento

Un back-end realizado sobre la arquitectura REST al que se conecta desde un cliente Android. Este back-end es capaz de crear, actualizar, borrar y listar Líquidos, Aromas, Bases y líquidos prefabricados en una base de datos MongoDB.

Tiene capacidad de autentificación usando tokens y clasifica la información por usuarios haciendo que los datos se mantengan desde cualquier cliente desde el que se conecte el usuario.

## Librerías utilizadas

- JSON Web Tokens
- Mongoose
- Express
- BCrypt
- Nodemon
- Body-Parser

## Requisitos previos

- NodeJS v8.9.4 o superior
- MongoDB v3.6.2 o superior
- NPM v5.6.0 o superior
- Postman, RESTed, RESTClient o algún cliente para conectarse a la API

> **NOTA:** Las versiones aquí indicadas son las que se usaron a la hora de crear este proyecto, no garantizamos su correcto funcionamiento con versiones anteriores.

## Set-Up inicial

Instalamos las dependencias necesarias

`npm install` && `nodemon server.js` / `node server.js` / `npm start`

## Rutas REST

| Método | Ruta | Descripción |
| --- | --- | -- |
| **GET** | /liquids | Lista todos los líquidos | 
| **POST** | /liquids | Crea un nuevo líquido |
| **DELETE** | /liquids/:id | Borra un líquido dependiendo del ID |
| **PUT** | /liquids/:id | Actualiza un líquido con los datos del Body |
| **POST** | /signup | Registra un nuevo usuario |
| **POST** | /login | Autentifica un usuario

> **NOTA:** Las rutas tendrían el mismo formato para Liquids, Flavours, Bases y Premades, y todas dependen del usuario.