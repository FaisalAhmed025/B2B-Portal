
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Agent {
    @Column()
    @PrimaryGeneratedColumn()
    Id:number 
    @Column()
    AgentId:string
    @Column()
    Name:string
    @Column()
    Email:string
    @Column()
    Password:string
    @Column()
    Phone:string
    @Column()
    JoinAt:string
    @Column()
    Status:string

    @Column()
    IsActive:string
    @Column()
    Company:string

    @Column()
    Companyadd:string
    @Column()
    Area:string
    @Column()
    CompanyImage:string
    @Column()
    LogoPermission:number
    @Column()
    Markup:string
    @Column()
    Bonus:number
    @Column()
    Credit:number
    @Column()
    LoginIp:string
    @Column()
    Browser:string
    @Column()
    Platform:string
}
