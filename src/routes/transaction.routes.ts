import express from "express";
const router = express.Router();

import { createTransaction } from "../Controllers/transaction.controller";


router.post('/api/client/:clientId/transaction', createTransaction);


export default router;
