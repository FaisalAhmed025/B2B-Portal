import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"


@Entity()
export class Control {
    @Column()
    @PrimaryGeneratedColumn()
    Id: number
    @Column()
    Active: number
    @Column()
    Sabre: number
    @Column()
    Galileo: number
    @Column()
    Flyhub: number
    @Column()
    Amadeus: number
    @Column()
    Priority1: number
    @Column()
    Priority2: number
    @Column()
    Priority3: number
    @Column()
    GdsPrice: number
    @Column()
    FarePrice: number
}
