import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"


@Entity()
export class Refund {
    @Column()
    @PrimaryGeneratedColumn()
    Id:number
    @Column()
    RefundId:String
    @Column()
    AgentId:string
    @Column()
    BookingId:string
    @Column()
    TicketId:String
    @Column()
    PassengerDetails:string
    @Column()
    TicketCost:number
    @Column()
    PenaltyAmount: number
    @Column()
    AmountRefunded:number
    @Column()
    ServiceFee:number
    @Column()
    Status:string
    @Column()
    RequestedBy:string
    @Column()
    RequestedAt:string
    @Column()
    ActionBy:string
    @Column()
    ActionAt:string
    @Column()
    Remarks:string
}
