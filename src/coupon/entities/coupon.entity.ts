import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Coupon {
    @Column()
    @PrimaryGeneratedColumn()
    Id: number
    @Column()
    Coupon: string
    @Column()
    Status: string
    @Column()
    UseLimit: number
    @Column()
    CreatedAt: string
    @Column()
    ApplyBy: string
}
