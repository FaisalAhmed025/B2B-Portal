import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Reissue {

    @Column()
    @PrimaryGeneratedColumn()
    Id: number
    @Column()
    AgentId: string
    @Column()
    ReIssueId:string
    @Column()
    BookingId:string
    @Column()
    TicketId:string
    @Column()
    PassengerDetails:string
    @Column()
    Charge:string
    @Column()
    ServiceFee:string
    @Column()
    ReissueDate:string
    @Column()
    RequestedBy:string
    @Column()
    RequestedAt:string
    @Column()
    Status:string
    @Column()
    Remarks:string
    @Column()
    ActionBy:string
    @Column()
    ActionAt:String
}
