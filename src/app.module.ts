import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AgentModule } from './agent/agent.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Agent } from './agent/entities/agent.entity';
import { AgentFailedModule } from './agent_failed/agent_failed.module';
import { AgentFailed } from './agent_failed/entities/agent_failed.entity';
import { AgentLedgerModule } from './agent_ledger/agent_ledger.module';
import { AgentLedger } from './agent_ledger/entities/agent_ledger.entity';
import { AirlinesModule } from './airlines/airlines.module';
import { Airlines } from './airlines/entities/airline.entity';
import { AirportsModule } from './airports/airports.module';
import { Airports } from './airports/entities/airport.entity';
import { AirticketModule } from './airticket/airticket.module';
import { Airticket } from './airticket/entities/airticket.entity';
import { AllairlinesModule } from './allairlines/allairlines.module';
import { Allairlines } from './allairlines/entities/allairline.entity';
import { AllairportModule } from './allairport/allairport.module';
import { Allairport } from './allairport/entities/allairport.entity';
import { AllpackagesModule } from './allpackages/allpackages.module';
import { Allpackages } from './allpackages/entities/allpackage.entity';
import { BankaccountsModule } from './bankaccounts/bankaccounts.module';
import { Bankaccounts } from './bankaccounts/entities/bankaccount.entity';
import { BookingModule } from './booking/booking.module';
import { Booking } from './booking/entities/booking.entity';
import { BookingothersModule } from './bookingothers/bookingothers.module';
import { Bookingothers } from './bookingothers/entities/bookingother.entity';
import { ChatModule } from './chat/chat.module';
import { Chat } from './chat/entities/chat.entity';
import { ControlModule } from './control/control.module';
import { Control } from './control/entities/control.entity';
import { CouponModule } from './coupon/coupon.module';
import { Coupon } from './coupon/entities/coupon.entity';
import { DeletedAgentModule } from './deleted_agent/deleted_agent.module';
import { DeletedAgent } from './deleted_agent/entities/deleted_agent.entity';
import { DepositrequestModule } from './depositrequest/depositrequest.module';
import { Depositrequest } from './depositrequest/entities/depositrequest.entity';
import { FailedbookingModule } from './failedbooking/failedbooking.module';
import { Failedbooking } from './failedbooking/entities/failedbooking.entity';
import { ForgetpasswordModule } from './forgetpassword/forgetpassword.module';
import { Forgetpassword } from './forgetpassword/entities/forgetpassword.entity';



@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'b2b',
    entities:[
      Agent,
      AgentFailed,
      AgentLedger,
      Airlines,
      Airports,
      Airticket,
      Allairlines,
      Allairport,
      Allpackages,
      Bankaccounts,
      Booking,
      Bookingothers,
      Chat,
      Control,
      Coupon,
      DeletedAgent,
      Depositrequest,
      Failedbooking,
      Forgetpassword
    ],
  }), 
  
  AgentModule,
  AgentFailedModule,
  AgentLedgerModule,
  AirportsModule,
  AirlinesModule,
  AirticketModule,
  AllairlinesModule,
  AllairportModule,
  AllpackagesModule,
  BankaccountsModule,
  BookingModule,
  BookingothersModule,
  ChatModule,
  ControlModule,
  CouponModule,
  DeletedAgentModule,
  DepositrequestModule,
  FailedbookingModule,
  ForgetpasswordModule,
   
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
