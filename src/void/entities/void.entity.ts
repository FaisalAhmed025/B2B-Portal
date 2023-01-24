import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Void {
    @Column()
    @PrimaryGeneratedColumn()
    Id:number
    @Column()
    BookingId:string
    @Column()
    VoidId:string
    @Column()
    TicketId:string
    @Column()
    AgentId:string
    @Column()
    PassengerDetails:string
    @Column()
    RefundAmount:string
    @Column()
    Status:string
    @Column()
    reason:string
    @Column()
    RequestedBy:string
    @Column()
    ActionBy:string
    @Column()
    RequestedAt:string
    @Column()
    ActionAt:string
}
