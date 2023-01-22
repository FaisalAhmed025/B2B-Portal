import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"


@Entity()
export class Bankaccounts {
    @Column()
    @PrimaryGeneratedColumn()
    Id: number
    @Column()
    AgentId: string
    @Column()
    BankName: string
    @Column()
    AccountName: string
    @Column()
    AccountNumber: string
    @Column()
    Branch: string
    @Column()
    Swift: string
    @Column()
    Address: string
    @Column()
    Routing: string
    @Column({type: 'date'})
    CreatedAt: Date
}
