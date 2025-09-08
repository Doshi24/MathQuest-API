import express from 'express'
import { PlayGame } from '../controller/game.controller.js';
import store_name_to_db from '../controller/savename.controller.js'


const router = express.Router();

router.route('/').post(PlayGame)
router.route('/savename').post(store_name_to_db)


export default router