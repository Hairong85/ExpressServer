import {Request,Response} from 'express';
import {Patient} from '../entities/Patient';


function isPatient(arg: any): arg is Patient{
      return arg.firstname != undefined && 
             arg.surname != undefined &&
             arg.phone != undefined &&
             arg.email != undefined &&
             arg.hasPacemakeImplanted != undefined &&
             arg.hasAbnormalBleeding != undefined;
}



class TypeError extends Error{
      constructor(){
            super("Wrong Type");
            Object.setPrototypeOf(this, TypeError.prototype);
      }
}



const GetPatient = async(req:Request,res:Response)=>{
      const {id, firstname, surname} = req.query;

      try{
            const selectedPatients = 
      (id == undefined && firstname == undefined && surname == undefined)?
      (await Patient.find({take: 10})) :
      (await Patient.find({where:[
                                    {id:id},
                                    {firstname: firstname},
                                    {surname: surname}
                                    ]}));
      
      if(selectedPatients.length == 0)
            res.status(404).json({Error: "Not Found", Message: "The patient you are after is not found"});
      else
            res.status(200).json(selectedPatients);  
      }
      catch(e: any){
            res.status(500).json({Error: "Internal Error", Message: "Oops...Something went wrong."});
            console.log(e.message);
      }
         
}

const UpsertPatient =async(req:Request,res:Response)=>{
      try{
            let obj = {
                  ...{id:0},
                  ...req.body
            };
      
            if(!isPatient(obj))
                  throw new TypeError();
       
            if (obj.id==0){
                  await Patient.create(obj).save();
                  res.status(201).json({Result:"New Patient has been created successfully."});
            }
            else{
                  let oldObj = await Patient.findOneOrFail(obj.id);
                  if (oldObj!= undefined){
                        await Patient.update(oldObj.id,obj);
                        res.status(201).json({Result:`Patient ${obj.id} has been updated successfully.`});
                  }
                  else {
                        res.status(404).json({Error:"Not Found.",Message:"The patient you want to update is not found."})
                  }
            }
      }
      catch(error){
            if(error instanceof TypeError)
                  res.status(400).json({Error: "Bad Request", Message: "Request Body is in a wrong format"});
            else
                  res.status(500).json({Error: "Internal Error", Message: "Opps... Something went wrong."});
      }
      
}


export {GetPatient,UpsertPatient};