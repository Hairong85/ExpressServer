import Express= require('express');
import { RequestHandler } from "express";

const RegisterRoute =(app:Express.Application,path:string,method:string,handler:RequestHandler)=>{
      switch(method){
            case "GET" :
                  app.get(path,handler);
                  break;
            case "POST" :
                  app.post(path,handler);
                  break;
            case "PUT" :
                  app.put(path,handler);
                  break;
            case "PATCH" :
                  app.patch(path,handler);
                  break;
            case "DELETE" :
                  app.delete(path,handler);
                  break;

      }

};

const RegisterRoutes = (app:Express.Application,routes:{path:string,method:string,handler:RequestHandler}[])=>{

      routes.forEach(element => {
            RegisterRoute(app,element.path,element.method,element.handler);
      });
};

export {RegisterRoute,RegisterRoutes};