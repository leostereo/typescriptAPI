import {  Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { PurchaseEntity } from "../../purchase/entities/purchase.entity";
import { ProductEntity } from "../../product/entities/product.entity";

@Entity({name:"purchase-products"})
export class PurchaseProductEntity extends BaseEntity{
    
    @Column()
    quantityProduct!:number;

    @Column()
    totalPrice!:number

    @ManyToOne(()=>PurchaseEntity,(pruchase)=>pruchase.purchaseProduct)
    @JoinColumn({name:"purchase_id"})
    purchase!:PurchaseEntity
    
    @ManyToOne(()=>ProductEntity,(product)=>product.purchaseProduct)
    @JoinColumn({name:"product_id"})
    product!:ProductEntity



}