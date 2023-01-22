import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Allairport {
    @Column()
    @PrimaryGeneratedColumn()
    Id: number
    @Column()
    Code: string
    @Column()
    Name: string
    @Column()
    city: string
    @Column()
    Country: string
}
