import { app } from "./server.js";
import {port} from "./config"

app.listen(port, ()=>{
    console.log ("conectado!")
})