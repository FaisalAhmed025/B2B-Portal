import { Entity,Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Visachecklist {
    @Column()
    @PrimaryGeneratedColumn()
    Id:number
    @Column()
    VisaId:string
    @Column()
    Country:String
    @Column()
    Category:string
    @Column()
    VisaType:string
    @Column()
    PassengerType:string
    @Column()
    CheckList:string

}
