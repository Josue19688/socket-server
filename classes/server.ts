import express from 'express';
import { SERVER_PORT } from '../globals/enviroments';
import {Server} from 'socket.io';
import http from 'http';



export default class ServerSocket{

    private static _instance:ServerSocket;
    public app:express.Application;
    public port:number;


    public io :Server;
    private httpServer : http.Server;



    private constructor(){
        this.app=express();
        this.port=SERVER_PORT;
        
        this.httpServer = http.createServer(this.app);
        this.io = new Server(this.httpServer);
        this.escucharSockets();
    }

    public static get instance(){
        return this._instance || (this._instance=new this());
    }

    private escucharSockets(){
        console.log('Escuchando conexiones');

        this.io.on('connection',cliente=>{
            console.log('Cliente conectado');
        });
    }

    start(callback:any ){
        this.httpServer.listen(this.port, callback);
    }
}