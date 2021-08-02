import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, UpdateDateColumn } from "typeorm";
import { User } from "../utils/User";
import { Client } from "./Client";

@Entity()
export class Banker extends User {

    @Column({
        unique: true,
        length: 10
    })
    employee_number: string;

    @Column({
        default: true,
        name: "active" // nombre de la column
    })
    is_active: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @ManyToMany(() => Client,{
        cascade: false
    })
    @JoinTable({
        name: "bankers_clients",
        joinColumn: {
            name: 'banker',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'client',
            referencedColumnName: 'id'
        }
    })
    clients: Client[]

}

// client_id banker_id
//      1       3
//      1       2
//      3       3