import express from 'express'
import { DoAddition } from '../controller/game.controller.js';


const router = express.Router();

router.route('/game').post(DoAddition)

export default router