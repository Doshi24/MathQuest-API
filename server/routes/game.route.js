import express from 'express'
import { PlayGame } from '../controller/game.controller.js';


const router = express.Router();

router.route('/').post(PlayGame)

export default router