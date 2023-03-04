import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Bookingothers {
    @Column()
    @PrimaryGeneratedColumn()
    Id: number
    @Column()
    AgentId: string
    @Column()
    Reference: string
    @Column()
    Amount: number
    @Column()
    Description:string
    @Column()
    ServiceType: string
    @Column()
    Attachment: string
    @Column()
    CompanyName: string
    @Column()
    CompanyPhone: string
    @Column()
    CreatedBy: string
    @Column()
    CreatedAt: string
}
