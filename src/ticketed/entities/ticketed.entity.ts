import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"


@Entity()
export class Ticketed {
    @Column()
    @PrimaryGeneratedColumn()
    Id:number
    @Column()
    AgentId:string
    @Column()
    BookingId:string
    @Column()
    TicketId:string
    @Column()
    Gds:string
    @Column()
    AirlinesPnr:string
    @Column()
    GdsPnr:string
    @Column()
    TicketNo:string
    @Column()
    Prefix:string
    @Column()
    PassengerName:string
    @Column()
    PassportNo:string
    @Column()
    PType:string
    @Column()
    Gender:string
    @Column()
    TicketedBy:string
}
