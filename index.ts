
import express from 'express';
import cors from 'cors';

import { SERVER_PORT } from "./globals/enviroments";
import { router } from "./routes/router";
import ServerSocket from './classes/server';




const server = ServerSocket.instance;

server.app.use(express.json());

//estamos aceptado peticiones de todos los dominios
server.app.use(cors({origin:true, credentials:true}));

server.app.use('/',router);




server.start(()=>{
    console.log(`Servidor corriendo en el puerto ${SERVER_PORT}`);
})