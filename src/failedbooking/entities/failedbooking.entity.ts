import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Failedbooking {
    @Column()
    @PrimaryGeneratedColumn()
    Id: number
    @Column()
    BookingId: string
    @Column()
    AgentId:string
    @Column()
    StaffId: string
    @Column()
    System: string
    @Column()
    DepFrom: string
    @Column()
    ArrTo: string
    @Column()
    Route:string
    @Column()
    Airlines: string
    @Column()
    TripType: string
    @Column()
    DepTime:string
    @Column()
    ArrTime: string
    @Column()
    Pax: number
    @Column()
    AdultCount: number
    @Column()
    ChildCount: number
    @Column()
    InfantCount: number
    @Column()
    NetCost: number
    @Column()
    FlightNumber: string
    @Column()
    CabinClass:string
    @Column()
    SearchId:string
    @Column()
    ResultId:string
    @Column()
    CreatedAt: string
    @Column()
    CreatedBy:string
    @Column()
    CompanyName:string
}
