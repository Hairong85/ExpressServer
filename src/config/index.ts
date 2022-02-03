import path = require("path");
import * as dotenv from 'dotenv';

dotenv.config({path: path.resolve(__dirname, "../../.env")});

const test = [path.resolve(__dirname, "../entities/*.*")];
console.log(test);

export default{
      db_config: {
            type:process.env.DB_TYPE,
            host:process.env.DB_HOST,
            //All environment variables are strings, port requires a int
            //nullable check in case DB_PPORT does not exist in environment
            port:parseInt(process.env.DB_PORT??""),
            username:process.env.DB_USERNAME,
            password:process.env.DB_PASSWORD,
            database:process.env.DB_DATABASE,
            synchronize: false,
            //Specify entities involved in the context
            //Any files with ts or js extension under folder entities
            //ts is for running with source code, js is for built code
            entities: [path.resolve(__dirname, "..", "entities/*.*")]
      }
};