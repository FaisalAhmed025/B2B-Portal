import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Visainfo {
    @Column()
    @PrimaryGeneratedColumn()
    Id:number
    @Column()
    VisaId:string
    @Column()
    Country:String
    @Column()
    VisaCategory:string
    @Column()
    VisaType:string
    @Column()
    EntryType:string
    @Column()
    Duration:string
    @Column()
    MaximumStay:string
    @Column()
    ProcessingTime:string
    @Column()
    Interview:String
    @Column()
    Location:string
    @Column()
    Cost:number
    @Column()
    EmbassyFee:number
    @Column()
    AgentFee:number
    @Column()
    AgencyFee:number
    @Column()
    FFIServiceCharge:number
    @Column()
    Total:number
    @Column()
    CreatedAt: string
}
