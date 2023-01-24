import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Orders {
    @Column()
    @PrimaryGeneratedColumn()
    Id:number
    @Column()
    Name:string
    @Column()
    Email:string
    @Column()
    Phone:string
    @Column()
    Amount:number
    @Column()
    Address:String
    @Column()
    Status:string
    @Column()
    TransactionId:string
    @Column()
    Currency:string
}
