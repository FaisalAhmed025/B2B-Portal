
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AgentLedger {
    @Column()
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    agentSubId:string
    @Column()
    staffId:string
    @Column()
    deposit:number
    @Column()
    purchase:number
    @Column()
    loan:number
    @Column()
    returnMoney:number
    @Column()
    void:number
    @Column()
    refund:number
    @Column()
    reissue:number
    @Column()
    others:number
    @Column()
    servicefee:number
    @Column()
    lastAmount:number
    @Column()
    transactionId:string
    @Column()
    details:string
    @Column()
    reference:string
    @Column()
    actionBy:string
    @Column()
    createdAt:string
}

