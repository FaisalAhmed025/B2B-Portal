import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Allairlines {
    @Column()
    @PrimaryGeneratedColumn()
    Id: number
    @Column()
    Code: string
    @Column()
    Name: string
    @Column()
    Comission: number
}
