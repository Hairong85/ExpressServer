import {createConnection,ConnectionOptions} from "typeorm";
import config from '../config';

export const dbconnection = async()=>{
      return await createConnection(config.db_config as ConnectionOptions);
}