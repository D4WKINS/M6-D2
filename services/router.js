import express from "express"
import UserModel from "./users/schema.js"
const usersRoutes = express.Router()


usersRoutes.post("/", async(req,res,next) =>{
    try{  
        const newUser = new UserModel(UserModel)
         const mongoRes = await newUser.save() //inserts into database
         console.log(newUser)
         res.status(201).send(mongoRes)
    }
    catch(error){
        console.log(err)
        next(error)    
    }
})


usersRoutes.get("/", async(req,res,next) =>{
    try{  
            // const newDocument = new UserModel(newUser)
            // await newDocument.save()
            const users = await userModel.find({})
            res.send(users)
    }
    catch(error){
        console.log(err)
        next(error)
    }
})

usersRoutes.get("/:id", async(req,res,next) =>{

    try{

    }
    catch(error){s
        console.log(err)
        next(error)
    }

})


usersRoutes.put("/:id", async(req,res,next) =>{

    try{
        
    }
    catch(error){
        console.log(err)
        next(error)
    }

})
usersRoutes.delete("/:id", async(req,res,next) =>{
    try{

    }
    catch(error){
        console.log(err)
        next(error)
    }
})
export default usersRoutes