import * as express from "express";
import { Request, Response } from "express";
import * as dotenv from "dotenv";
import path = require('path');
import { GetPatient,UpsertPatient } from "./routes/patients";
import { RegisterRoute,RegisterRoutes } from "./routes/routeRegister";
import { dbconnection } from "./db/connection";
var cors = require('cors');


const main = async()=>{
      await dbconnection();
      const app = express();
      app.use(cors());
      app.use(express.json());

      RegisterRoute(app, "/", "GET", async(req:Request, res: Response) =>{
            res.send("Hello");
      });

      const routes = [
            {path:"/patients",method:"GET",handler:GetPatient},
            {path:"/patients",method:"POST",handler:UpsertPatient}   
      ];

      RegisterRoutes(app,routes);

      dotenv.config({path:path.resolve(__dirname,"../.env")});
      const url = process.env.END_POINT_URL;
      const port = process.env.END_POINT_PORT;

      app.listen(port,()=>{
            console.log(`server started on http://${url}:${port}`);
      });

};

main();
