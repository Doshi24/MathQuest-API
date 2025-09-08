import { app } from "./main.js";


app.listen(process.env.PORT, ()=>{
    console.log("server started")
    console.log("http://localhost:3000")
})

app.get('/', (req,res)=>{
    console.log("hello world")
})