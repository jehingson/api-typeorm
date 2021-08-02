import { Request, Response } from "express";

import { Banker } from "../models/Banker";
import { Client } from "../models/Client";

export const createBanker = async (req: Request, res: Response): Promise<Response> => {

    const {
        firstName,
        lastName,
        email,
        employeeNumber,
        cardNumber,
    } = req.body
    const banker = Banker.create({
        first_name: firstName,
        last_name: lastName,
        email,
        employee_number: employeeNumber,
        card_number: cardNumber,
    })

    await banker.save()
    return res.json(banker)
}

export const connectBankerToClient = async (req: Request, res: Response): Promise<Response> => {


    console.log('sss', req.params)
    const { bankerId, clientId } = req.params;

    const client = await Client.findOne({ id: parseInt(clientId) })

    const banker = await Banker.findOne({ id: parseInt(bankerId) })

    console.log(banker, client)

    if (!banker || !client) {
        return res.json({
            msg: "Banker or client not found"
        })
    }

    banker.clients = [
        client
    ]

    await banker.save()


    return res.json({
        msg: "Banker connected to client"
    })
}

