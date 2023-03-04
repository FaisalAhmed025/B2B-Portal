import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"


@Entity()
export class Chat {
    @Column()
    @PrimaryGeneratedColumn()
    Id: number
    @Column()
    AgentId: string
    @Column()
    StaffId: string
    @Column()
    HelpDesk: string
    @Column()
    CreatedTime:string
    @Column()
    Seen: string
    @Column()
    SeenAt: string
    @Column()
    Attachment: string
}
