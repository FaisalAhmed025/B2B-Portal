import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Airlines {
    @Column()
    @PrimaryGeneratedColumn()
    Id:number
    @Column()
    Name:string
    @Column()
    NameBangla:string
    @Column()
    Code:string
    @Column()
    Commission:number
}
