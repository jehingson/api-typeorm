
import 'reflect-metadata'
import express from "express";
import cors from "cors";
import morgan from 'morgan'
import { createConnection } from "typeorm";

//import userRoutes from "./routes/user.routes";
import clientRoutes from "./routes/client.routes";
import bankerRoutes from "./routes/banker.routes";
import transactionRoutes from './routes/transaction.routes'


const app =  express();
createConnection()

// middleware

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// routes 
// app.use(userRoutes);
app.use(clientRoutes);
app.use(bankerRoutes);
app.use(transactionRoutes);


app.listen(4000);
console.log('Server on port', 4000)