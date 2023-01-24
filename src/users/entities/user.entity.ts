import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"


@Entity()
export class Users {
    @Column()
    @PrimaryGeneratedColumn()
    Id:number
    @Column()
    EMP_Id:string
    @Column()
    UserName:string
    @Column()
    Fname:string
    @Column()
    Lname:string
    @Column()
    Email:string
    @Column()
    Password:string
    @Column()
    Role:string
    @Column()
    Add:string
    @Column()
    Edit:string
    @Column()
    Delete:string
    @Column()
    Status:string
    @Column()
    Img:string
}
