export class CreateRefundDto {

    Id:number
    RefundId:String
    AgentId:string
    BookingId:string
    TicketId:String
    PassengerDetails:string
    TicketCost:number
    PenalytAmount: number
    AmountRefunded:number
    ServiceFee:number
    Status:string
    RequestedBy:string
    RequestedAt:string
    ActionBy:string
    ActionAt:string
    Remarks:string
}
