import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Subagent {
    @Column()
    @PrimaryGeneratedColumn()
    Id:number
    @Column()
    AgentId:string
    @Column()
    SubAgentId:string
    @Column()
    Name:string
    @Column()
    Email:string
    @Column()
    Password: string
    @Column()
    Image:string
    @Column()
    Phone:string
    @Column()
    Address:string
    @Column()
    Comission:string
}
