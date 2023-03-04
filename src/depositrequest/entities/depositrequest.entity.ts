import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Depositrequest {
    @Column()
    @PrimaryGeneratedColumn()
    Id: number
    @Column()
    AgentId: string
    @Column()
    StaffId: string
    @Column()
    AgentSubId: string
    @Column()
    Sender: string
    @Column()
    Reciever: string
    @Column()
    PaymentWay: string
    @Column()
    PaymentMethod: string
    @Column()
    ChequeIssueDate: string
    @Column()
    Ref: string
    @Column()
    Amount: number
    @Column()
    Attachment: string
    @Column()
    CreatedAt: string
    @Column()
    DepositBy: string
    @Column()
    Status: string
    @Column()
    Remarks: string
    @Column()
    ApprovedBy: string
    @Column()
    RejectBy: string
    @Column()
    ActionAt: string
}
