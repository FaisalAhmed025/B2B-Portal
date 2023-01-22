import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"


@Entity()
export class Allpackages {
    @Column()
    @PrimaryGeneratedColumn()
    Id: number
    @Column()
    PkId:string
    @Column()
    TitleEN: string
    @Column()
    TitleBN: string
    @Column()
    Album: string
    @Column()
    CoverImage: string
    @Column()
    LongTitleEN: string
    @Column()
    LongTitleBN: string
    @Column()
    LocationEn: string
    @Column()
    LocationBN: string
    @Column()
    ShortDescriptionEN: string
    @Column()
    ShortDescriptionBN: string
    @Column()
    StartDateEN: string
    @Column()
    StartDateBN: string
    @Column()
    EndDateEN: string
    @Column()
    EndDateBN: string
    @Column()
    DurationEn: string
    @Column()
    DurationBN: string
    @Column()
    Price: string
    @Column()
    TripTheme: string
    @Column()
    TripType: string
    @Column()
    TripPlan: string
    @Column()
    ScheduleDetailsEN: string
    @Column()
    ScheduleDetailsBN: string
    @Column()
    InclusionBN: string
    @Column()
    InclusionEN: string
    @Column()
    ExclusionEN: string
    @Column()
    ExclusionBN: string
    @Column()
    PlaceVisitEN: string
    @Column()
    PlaceVisitBN: string
    @Column()
    DetailsEN: string
    @Column()
    DetailsBN: string
    @Column()
    BookingPolicyEN: string
    @Column()
    BookingPolicyBN: string
    @Column()
    RefundPolicyEN: string
    @Column()
    RefundPolicyBN: string
    @Column()
    TermsEn:string
    @Column()
    TermsBN: string
    @Column()
    AdditionalEN: string
    @Column()
    AdditionalBN: string
    @Column()
    TravelTipsEN: string
    @Column()
    TravelTipsBN:string
    @Column()
    Slider1:string
    @Column()
    Slider2: string
    @Column()
    Slider3:string
    @Column()
    Slider4:string
    @Column()
    Slider5:string
    @Column()
    Slider6:string
    @Column()
    Link: string
    
}
