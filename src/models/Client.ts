import { Column, CreateDateColumn, Entity, OneToMany, UpdateDateColumn, ManyToMany } from "typeorm";
import { User } from "../utils/User";
import { Banker } from "./Banker";
import { Transaction } from "./Transaction";




@Entity()
export class Client extends User {


    @Column({
        type: "numeric"
    })
    balance: number;

    @Column({
        default: true,
        name: "active" // nombre de la column
    })
    is_active: boolean;

    @Column({
        type: "simple-json",
        nullable: true // no null
    })
    addition_info: {
        age: number;
        hair_color: string;
    }

    // @Column({
    //     type: "simple-array",
    // })
    // family_members: string[]

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany(
        () => Transaction, transaction => transaction.client
    )
    transactions: Transaction[]

    @ManyToMany(() => Banker,
        {
            cascade: false
        })
    bankers: Banker[]



}