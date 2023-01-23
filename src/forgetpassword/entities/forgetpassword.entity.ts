import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Forgetpassword {
    @Column()
    @PrimaryGeneratedColumn()
    Id: number
    @Column()
    AgentId: string
    @Column()
    Email:string
    @Column()
    Link:string
    @Column()
    IsClick:number
    @Column()
    Expire:string
    @Column()
    Created:string
}
