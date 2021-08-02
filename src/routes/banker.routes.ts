import express from "express";
const router = express.Router();


import { createBanker, connectBankerToClient } from "../Controllers/banker.controller";

router.post('/api/banker', createBanker)
router.put('/api/banker/:bankerId/client/:clientId', connectBankerToClient)

export default router;