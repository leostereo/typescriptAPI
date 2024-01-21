import {  Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { UserEntity } from "../../entities/user.entity";
import { PurchaseEntity } from "../../purchase/entities/purchase.entity";
import { ProductEntity } from "../../product/entities/product.entity";

@Entity({name:"category"})
export class CategoryEntity extends BaseEntity{
    
    @Column()
    categoryName!:string;


    @OneToMany(()=>ProductEntity, (product)=>product.category)
    products!:ProductEntity[]
}