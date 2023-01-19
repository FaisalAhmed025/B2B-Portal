import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AgentFailed {
    @Column()
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    name:string
    @Column()
    email:string
    @Column()
    password:string
    @Column()
    phone:string
    @Column()
    joinAt:string
    @Column()
    status:string
    @Column()
    company:string
    @Column()
    companyadd:string
  
}
