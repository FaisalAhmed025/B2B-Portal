import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"


@Entity()
export class Booking {

    @Column()
    @PrimaryGeneratedColumn()
    Id: number
    @Column()
    BookingId: string
    @Column()
    Vendor: string
    @Column()
    Invoice: number
    @Column()
    TicketId: string
    @Column()
    VoidId: string
    @Column()
    RefundId:string
    @Column()
    ReissueId:string
    @Column()
    AgentId:string
    @Column()
    AgentSubId:string
    @Column()
    StaffId: string
    @Column()
    Email: string
    @Column()
    Phone: string
    @Column()
    Refundable: string
    @Column()
    Pnr: string
    @Column()
    AirlinesPnr: string
    @Column()
    TripType: string
    @Column()
    JourneyType: string
    @Column()
    Pax: number
    @Column()
    AdultBag: string
    @Column()
    ChildBag: string
    @Column()
    InfantBag: string
    @Column()
    AdultCount: number
    @Column()
    ChildCount: number
    @Column()
    InfantCount: number
    @Column()
    NetCost: number
    @Column()
    AdultCostBase: number
    @Column()
    ChildCostBase: number
    @Column()
    InfantCostBase: number
    @Column()
    AdultCostTax: number
    @Column()
    ChildCostTax: number
    @Column()
    InfantCostTax: number
    @Column()
    GrossCost: number
    @Column()
    BaseFare: number
    @Column()
    Tax: number
    @Column()
    DeptFrom: string
    @Column()
    Airlines: string
    @Column()
    ArriveTo: string
    @Column()
    Gds: string
    @Column()
    Status: string
    @Column()
    Coupon: string
    @Column()
    Bonus: string
    @Column()
    TravelDate: string
    @Column()
    BookedAt: string
    @Column()
    TimeLimit: string
    @Column()
    SearchId: string
    @Column()
    ResultId: string
    @Column()
    BookedBy: string
    @Column()
    lastUpdated: string
    @Column()
    maker: string
    @Column()
    Uid: string
}
