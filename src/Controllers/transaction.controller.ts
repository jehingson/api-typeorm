import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Client } from "../models/Client";
import { Transaction, TransactionTypes } from "../models/Transaction";

export const createTransaction = async (req: Request, res: Response): Promise<Response> => {
    
    const { clientId } = req.params
    console.log('body', req.body, clientId)
    const {type, amount} = req.body
    

    const client = await Client.findOne(parseInt(clientId))

    if(!client){
        return res.json({
            msg: 'client not found'
        })
    }
    const transaction = Transaction.create({
        type,
        amount,
        client
    })
    await transaction.save()

    if(type === TransactionTypes.DEPOSIT){
        client.balance = client.balance + amount
    }else if(type === TransactionTypes.WITHDRAW){
        client.balance = client.balance - amount
    }

    await client.save();

    return res.json({
        msg: 'Transaction added'
    })
}
