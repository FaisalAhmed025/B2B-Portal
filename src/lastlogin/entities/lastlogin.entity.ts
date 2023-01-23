import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Lastlogin {
    @Column()
    @PrimaryGeneratedColumn()
    Id: number
    @Column()
    AgentId:string
    @Column()
    AgencyName:string
    @Column()
    StaffName:string
    @Column()
    LoginIp:string
    @Column()
    Browser:string
    @Column()
    platform:string
    @Column()
    Success:string
    @Column()
    CreatedTime:string
}
