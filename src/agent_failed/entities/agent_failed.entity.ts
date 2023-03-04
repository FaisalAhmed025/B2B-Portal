import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AgentFailed {
    @Column()
    @PrimaryGeneratedColumn()
    Id:number
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
    Company:string
    @Column()
    CompanyAdd:string
  
}
