import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Notes {
    @Column()
    @PrimaryGeneratedColumn()
    Id: number
    @Column()
    Reference:string
    @Column()
    Note:string
    @Column()
    ActionBy:string
    @Column()
    ActionFrom:string
    @Column()
    ActionAt:string
}
