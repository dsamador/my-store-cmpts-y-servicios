import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myShoppingCart: Product[] = [];
  total: number = 0;

  products: Product[] = [
    {
      id: '1',
      name: 'Casa',
      price: 565,
      image: 'https://static.platzi.com/media/user_upload/house-034b0c04-eeff-42fa-b506-79f18f73ff90.jpg'
    },
    {
      id: '2',
      name: 'Bicicleta casi nueva',
      price: 356,
      image: 'https://static.platzi.com/media/user_upload/bike-143dcfe9-3190-49fd-88f7-d3bf74182072.jpg'
    },
    {
      id: '3',
      name: 'Colleción de albumnes',
      price: 34,
      image: 'https://static.platzi.com/media/user_upload/books-80160e05-d177-420b-89c5-01a97b2bdb76.jpg'
    },
    {
      id: '4',
      name: 'Mis libros',
      price: 23,
      image: 'https://static.platzi.com/media/user_upload/album-6f4213d5-1d2d-4e0f-96fe-edb36c3255b4.jpg'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onAddToShoppingCart(product: Product){
    this.myShoppingCart.push(product);
    this.total = this.myShoppingCart.reduce((sum, item)=> sum + item.price, 0)
  }

}
