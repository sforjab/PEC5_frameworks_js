import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent implements Article {
  name: string = 'Nike Court Vision Low';
  imageUrl: string = 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/818bb456-4fb5-49c9-bc6c-51d7f4d0f371/court-vision-low-zapatillas-1xL2Lc.png';
  price: number = 45;
  isOnSale: boolean = false;
  quantityInCart: number = 0;

  decrement() {
    if (this.quantityInCart > 0) {
      this.quantityInCart--;
    }
  }

  increment() {
    this.quantityInCart++;
  }
}