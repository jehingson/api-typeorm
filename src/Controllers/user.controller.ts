// import { Request, Response } from "express";
// import { getRepository } from "typeorm";
// import { User } from "../models/User";

// export const getUsers = async (req: Request, res: Response): Promise<Response> => {
//     const users = await getRepository(User).find();
//     return res.json(users)
// }
// export const getUser = async (req: Request, res: Response): Promise<Response> => {
//     const result = await getRepository(User).findOne(req.params.id);
//     return res.json(result)
// }
// export const createUsers = async (req: Request, res: Response): Promise<Response> => {
//     const newUsers = getRepository(User).create(req.body)
//     const results = await getRepository(User).save(newUsers)
//     return res.json(newUsers)
// }
// export const updateUsers = async (req: Request, res: Response): Promise<Response> => {
//     const user = await getRepository(User).findOne(req.body.id)
//     if(user){
//         getRepository(User).merge(user, req.body);
//         const results = getRepository(User).save(user);
//         return res.json(results)
//     }
//     return res.json({msg: 'Not User found'})
// }
// export const getDelete = async (req: Request, res: Response): Promise<Response> => {
//     const users = await getRepository(User).delete(req.params.id);
//     return res.json(users)
// }


