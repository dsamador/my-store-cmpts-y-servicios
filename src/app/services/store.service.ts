import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myShoppingCart: Product[] = [];
  private myCart = new BehaviorSubject<Product[]>([]);

  //si tienen signo peso al final es un observable
  myCart$ = this.myCart.asObservable();

  constructor() { }

  addProduct(product: Product){
    this.myShoppingCart.push(product);
    this.myCart.next(this.myShoppingCart);
  }

  getTotal(){
    return this.myShoppingCart.reduce((sum, item)=> sum + item.price, 0);
  }

  getMyShoppingCart(){
    return this.myShoppingCart;
  }
}
