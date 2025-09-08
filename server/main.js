import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv';
import router from './routes/routes.js'

const app = express()
app.use(cors());
app.use(express.json())

dotenv.config({
    path:'./.env'
});

app.use('/game',router)
app.use('/',router)




export { app }