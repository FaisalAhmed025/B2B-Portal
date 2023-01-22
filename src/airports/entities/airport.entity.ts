import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Airports {
@Column()
@PrimaryGeneratedColumn()   
Id:number
@Column() 
Code: string
@Column() 
Name: string
@Column() 
Citycode: string
@Column() 
CityName: string
@Column() 
CountryName: string
@Column() 
CountryCode: string
@Column() 
TimeZone: string
@Column() 
Lat:string
@Column() 
Lon:string
@Column() 
NumOfAirport: number

}
