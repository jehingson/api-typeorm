import express from "express";
const router = express.Router();


import {
    createClient,
    deleteClient,
    getClients

} from '../Controllers/client.controller'

router.post('/api/client', createClient);
router.delete('/api/client/:clientId', deleteClient);
router.get('/api/clients', getClients)



export default router;
