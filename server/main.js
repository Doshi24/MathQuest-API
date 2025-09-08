import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv';
import router from './routes/game.route.js'

const app = express()
app.use(cors());
app.use(express.json())

dotenv.config({
    path:'./.env'
});

app.use('/game',router)





export { app }