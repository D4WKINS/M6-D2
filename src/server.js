import express from "express"
import cors from "cors"
import listEndpoints from "express-list-endpoints"
import mongoose from "mongoose"
const port = process.env.PORT || 4000
const server = express()
import usersRoutes from "rou"
/*MIDDLE WARES*/
server.use(cors())
server.use(express.json())

/*ROUTES*/


/*ERROR HANDLERS*/

console.table(listEndpoints(server))

//1. Once we have established a connection to our Mongo data base
//2. Run Server                                // Defined options when connecting to our data base
mongoose.connect(process.env.MONGO_CONNECTION,{useNewUrlParser: true,useUnifiedTopology:true}).then(()=>{
    server.listen(port,()=>{ //When this code is executed our server status is then live and ready to recieve requests
        console.log(`Server is running on ${port}`)
    })
})

