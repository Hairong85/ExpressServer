import {Request,Response} from 'express';
import { User } from '../entities/User';

const GetUser = async(req: Request, res: Response) =>{
        const {email} = req.query;
        try{
                const matchedUsers = await User.find({where:[{emailAddress:email}], relations:['roles']});
                if(matchedUsers.length == 0)
                        res.status(404).json({Error: "Not Found", Message: "No matched user"});
                else
                        res.status(200).json(matchedUsers[0]);
        }
        catch(e:any){
                res.status(500).json({Error: "Internal Error", Message: "Oops...Something went wrong."});
                console.log(e.message);  
        }
}

export {GetUser};