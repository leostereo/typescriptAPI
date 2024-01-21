import {  Column, Entity } from "typeorm";
import { BaseEntity } from "../config/base.entity";

@Entity({name:"user"})
export class UserEntity extends BaseEntity{
    
    @Column()
    usernNme!:string;
    @Column()
    name!:string;
    lastName!:string;
    @Column({nullable:true})
    jobPosition?:string;
    @Column()
    numberPhone!:number;
    
}