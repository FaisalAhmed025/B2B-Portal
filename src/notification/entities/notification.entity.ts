import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Notification {
    @Column()
    @PrimaryGeneratedColumn()
    Id:number
    @Column()
    AgentId:string
    @Column()
    Title:string
    @Column()
    Text:string
    @Column()
    Status:string
    @Column()
    TimeDate:string
}
