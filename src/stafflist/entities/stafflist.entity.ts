import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Stafflist {
    @Column()
    @PrimaryGeneratedColumn()
    Id:number
    @Column()
    StaffId:string
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
    Designation:string
    @Column()
    Role:string
    @Column()
    Status:string
    @Column()
    Created:string
}
