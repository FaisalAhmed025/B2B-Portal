import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Visa {
    @Column()
    @PrimaryGeneratedColumn()
    Id:number
    @Column()
    Country:string
    @Column()
    VisaType:string
    @Column()
    VisaDetailsEN:string
    @Column()
    VisaDetailsBn:string
    @Column()
    PdfEN:string
    @Column()
    PdfBN:string
    @Column()
    UploadedAt:string
    }
