import mongoose  from "mongoose"


const userSchema = new mongoose.Schema({//These are the fields that will accept info from the user, each field has specific data type requirements
    name:String,
    surname:String,
    email:String,
    age:Number,
    professions:[String]
})
 // to create model we need a name and the schema which in our case "userSchema"
export default mongoose.model("User",userSchema)