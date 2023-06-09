# konecta

Proyecto de silvereconomy presentado como proyecto final en el desafío de tripulaciones de BBK Bootcamp by The Bridge.

Web app para solucionar el problema de la soledad en las personas mayores.

Queremos ofrecerles una plataforma para detectar problemas de su vida diaria a través de un chat y poder darles una solución offline adaptada a sus necesidades.

# despegando

Estas instrucciones te van a permitir obtener una copia para que puedas relizar pruebas.

Este proyecto es un MVP y determinadas funcionalidades no están totalmente desarrolladas.

Instalación:
$ git clone git@github.com:IdoyaGE/konecta.git
$ npm install
$ npm start.

# tecnologia

En este proyecto hemos utilizado MERN (stack de código abierto):

- Atlas MongoDB para la base de datos
- Express
- React (JavaScript)
- Node.js

Los datos del login y del chat están configurados para almacenarse en firebase (Authentication y Database).

Vamos con las librerías que tienes que instalar:

# librerías instaladas

### backend

    axios: versión 1.4.0,
    bcrypt: versión 5.1.0,
    body-parser: versión 1.20.2,
    cors: versión 2.8.5,
    dotenv: versión 16.1.4,
    express: versión 4.18.2,
    firebase: 9.22.1,
    gridfs-stream: 1.1.1,
    helmet: versión 7.0.0,
    jsonwebtoken: versión 9.0.0,
    mongodb: versión 4.1,
    mongoose: versión 7.2.2",
    moongose: versión 1.0.0,
    morgan: versión 1.10.0,
    multer: versión 1.4.4",
    node: versión 20.2.0,
    nodemon: versión 2.0.22,
    path: versión 0.12.7,
    path-to-regexp: versión 6.2.1,
    universal-cookie: versión 4.0.4,

### frontend

    axios: versión 1.4.0,
    firebase: versión 9.22.1,
    nodemon: versión 2.0.22,
    react: versión 18.2.0,
    react-dom: versión 18.2.0,
    sass: versión 1.62.1,
    universal-cookie: versión 4.0.4,
    bootstrap: versión 5.3.0,
    @emotion/react: versión 11.11.1,
    @emotion/styled: versión 11.11.0,
    @mui/icons-material: versión 5.11.16,
    @mui/material: versión 5.13.4,
    @reduxjs/toolkit: versión 1.9.5,
    @testing-library/jest-dom: versión 5.16.5,
    @testing-library/react: versión 13.4.0,
    @testing-library/user-event: versión 13.5.0,
    crypto-browserify: versión 3.12.0,
    dom: versión 0.0.3,
    dotenv: versión 16.1.4,
    formik: versión 2.4.1",
    install: versión 0.13.0,
    mongoose: versión 7.2.3,
    multer: versión 1.4.5-lts.1",
    nextjs-cors: versión 2.1.2,
    path: versión 0.12.7,
    path-browserify: versión 1.0.1,
    react-bootstrap: versión 2.7.4,
    react-dropzone: versión 14.2.3,
    react-persist: versión 1.0.2,
    react-redux: versión 8.0.7,
    react-router-dom: versión 6.12.0,
    react-scripts: versión 5.0.1,
    react-toastify: versión 9.1.3,
    redux-persist: versión 6.0.0,
    web-vitals: versión 2.1.4,
    yup: versión 1.2.0,

# styles

Hemos utilizado sass para estilos de css anidados y plantillas de Bootstrap.

# contenedor Docker

Hemos creado un contenedor Docker para el backend, para el frontend y para mongoDB.

Para arrancar el contenedor utiliza "docker compose up" e inicializa el backend y el frontend con "npm start".

# colaboración

Este proyecto ha sido desarrollado por estudiantes del BBK Bootcamp by TheBridge:
https://github.com/JonZapataB
https://github.com/IdoyaGE

# agradecimientos

Queremos agradecer a nuestro instructor de fullstack Danel:
https://github.com/LdMe

Sin él, este proyecto no existiría.
