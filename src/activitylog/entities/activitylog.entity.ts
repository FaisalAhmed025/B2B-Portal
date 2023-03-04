import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Activitylog {
    @Column()
    @PrimaryGeneratedColumn()
    Id:string
    @Column()
    AgentId:string
    @Column()
    Ref:string
    @Column()
    Status:string
    @Column()
    ActionRef:string
    @Column()
    Remarks:string
    @Column()
    platform:string
    @Column()
    ActionAt:string
}
