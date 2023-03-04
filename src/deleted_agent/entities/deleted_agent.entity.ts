import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class DeletedAgent {   
        @Column()
        @PrimaryGeneratedColumn()
        Id : number
        @Column()
        AgentId : string
        @Column()
        Name:string
        @Column()
        Email:string
        @Column()
        Password:string
        @Column()
        Phone:string
        @Column()
        JoinAt:string
        @Column()
        Status:string
        @Column()
        Company:string
        @Column()
        CompanyAdd:string
        @Column()
        CompanyImage:string
        @Column()
        LogoPermission:number
        @Column()
        MarkUp:string
        @Column()
        Bonus:number
        @Column()
        Credit:number
        @Column()
        ActionBy: string
        @Column()
        ApprovedBy: string
        @Column()
        RejectBy: string
        @Column()
        CreditedBy: string
    
    
}
