import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"


@Entity()
export class Groupfare {

    @Column()
    @PrimaryGeneratedColumn()
    Id: number
    @Column()
    GroupId:string
    @Column()
    Vendor:string
    @Column()
    Invoice:number
    @Column()
    Segment:number
    @Column()
    Career:string
    @Column()
    Total:number
    @Column()
    BasePrice:number
    @Column()
    Taxes: number
    @Column()
    Price:number
    @Column()
    Departure1: string
    @Column()
    Departure2: string
    @Column()
    Departure3: string
    @Column()
    DepTime1:string
    @Column()
    DepTime2:string
    @Column()
    DepTime3:string
    @Column()
    ArrTime1:string
    @Column()
    ArrTime2:string
    @Column()
    ArrTime3:string
    @Column()
    Seat: number
    @Column()
    Bags:number
    @Column()
    FlightNum1:number
    @Column()
    FlightNum2:number
    @Column()
    FlightNum3:number
    @Column()
    JourneyTime:number
    @Column()
    Transit1:number
    @Column()
    Transit2:string
}
