import {  Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { CategoryEntity } from "../../category/entities/category.entity";
import { PurchaseProductEntity } from "../../custom/entities/purchases-products.entity";

@Entity({name:"product"})
export class ProductEntity extends BaseEntity{
    
    @Column()
    productName!:string;

    @Column()
    description!:string;

    @Column()
    price!:number;

    @ManyToOne(()=>CategoryEntity,(category) => category.products)
    @JoinColumn({name:"category_id"})
    category!:CategoryEntity

    @OneToOne(()=>PurchaseProductEntity, (ppentity)=> ppentity.product)
    purchaseProduct!: PurchaseProductEntity[]

}