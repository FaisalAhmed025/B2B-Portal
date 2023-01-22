import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Airticket {
    @Column()
    @PrimaryGeneratedColumn()
    Id: number
    @Column()
    InvoiceId: string
    @Column()
    AgentId: string
    @Column()
    BookingId: string
    @Column()
    SystemPnr: string
    @Column()
    AirlinesPnr: string
    @Column()
    EticketNo: string
    @Column()
    PasengerType: string
    @Column()
    FlightDate: string
    @Column()
    AddedTime: string
}
