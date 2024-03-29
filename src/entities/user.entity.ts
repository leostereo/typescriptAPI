import {  Column, Entity, OneToOne } from "typeorm";
import { BaseEntity } from "../config/base.entity";
import { CustomerEntity } from "../customer/entities/customer.entity";

@Entity({name:"user"})
export class UserEntity extends BaseEntity{
    
    @Column()
    name!:string;

    @Column()
    userName!:string;
        
    @Column()
    lastName!:string;
    
    @Column()
    email!:string;
    
    @Column({})
    password!:string;
    
    @Column({})
    city!:string;
   
    @Column({nullable:true})
    province?:number;

    @OneToOne(()=>CustomerEntity,(customer)=> customer.user)
    customer!: CustomerEntity
    
}