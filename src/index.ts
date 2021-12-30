import * as express from "express";
import * as dotenv from "dotenv";
import path = require('path');

const main = ()=>{
      const app = express();

      app.get("/",(req,res)=>{
            res.send("hell");
      } );

      dotenv.config({path:path.resolve(__dirname,"../.env")});
      const url = process.env.END_POINT_URL;
      const port = process.env.END_POINT_PORT;

      app.listen(port,()=>{
            console.log(`server started on http://${url}:${port}`);
      });

};

main();
