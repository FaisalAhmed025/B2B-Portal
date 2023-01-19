import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Airlines {
    @Column()
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    name:string
    @Column()
    nameBangla:string
    @Column()
    code:string
    @Column()
    commission:number
}
