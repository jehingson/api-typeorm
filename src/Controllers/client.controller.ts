import { Request, Response } from "express";
import { getRepository, createQueryBuilder } from "typeorm";
import { Client } from "../models/Client";


export const createClient = async (req: Request, res: Response): Promise<Response> => {
    console.log('body', req.body)
    const {
        firstName,
        lastName,
        email,
        cardNumber,
        balance
    } = req.body
    const client = Client.create({
        first_name: firstName,
        last_name: lastName,
        email,
        card_number: cardNumber,
        balance
    })

    await client.save()


    return res.json(client)
}

export const deleteClient = async (req: Request, res: Response): Promise<Response> => {

    const { clientId } = req.params;

    const response = await Client.delete(parseInt(clientId))

    return res.json(response)
}

export const getClients = async (req: Request, res: Response): Promise<Response> => {


    const client = await createQueryBuilder(Client)
        .where('client.balance <= :balance', { balance: 600 })
        .leftJoinAndSelect('client.transactions', 'transaction')
        .getMany();
    return res.json(client)
}


