
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Agent {
    @Column()
    @PrimaryGeneratedColumn()
    id:number 
    @Column()
    agentId:string
    @Column()
    name:string
    @Column()
    email:string
    @Column()
    password:string
    @Column()
    phone:string
    @Column()
    joinAt:string
    @Column()
    status:string

    @Column()
    isActive:string
    @Column()
    company:string

    @Column()
    companyadd:string
    @Column()
    area:string
    @Column()
    companyImage:string
    @Column()
    logoPermission:number
    @Column()
    markup:string
    @Column()
    bonus:number
    @Column()
    credit:number
    @Column()
    loginIp:string
    @Column()
    browser:string
    @Column()
    platform:string
}
