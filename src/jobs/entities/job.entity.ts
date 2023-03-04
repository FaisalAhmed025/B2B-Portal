import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Jobs {
    @Column()
    @PrimaryGeneratedColumn()
    Id: number
    @Column()
    Text:string
    @Column()
    Status:string
    @Column()
    Message:string
}
