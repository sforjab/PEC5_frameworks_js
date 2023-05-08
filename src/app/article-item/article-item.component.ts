import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Article } from '../models/article';

@Component({
  selector: 'app-article-item',
  template: `
  <div class="container">
    <div class="article-item-container"
    [class]="article.isOnSale ? 'onSale' : ''">
        <img [src]="article.imageUrl" [alt]="article.name" />
        <div class="name">{{ article.name }}</div>
        <div class="price" [ngClass]="{'unavalaible': !article.isOnSale}">{{ article.price }} €</div>
        <div class="quantity-container" *ngIf="article.isOnSale">
            <button (click)="decrement()" [disabled]="article.quantityInCart === 0">-</button>
            <div class="quantityInCart">{{ article.quantityInCart }}</div>
            <button (click)="increment()">+</button>
        </div>
    </div>
  </div>
  `,
  styles: [
  `
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .article-item-container {
      border: 1px solid black;
      border-radius: 5px;
      display: inline-block;
      padding: 10px;
      text-align: center;
      width: 70%;
  }

  .onSale {
      background-color: #10d1df;
  }

  .article-item-container img {
      width: 80%;
  }

  .unavalaible {
      color: #d3d3d3;
  }

  .name {
    font-size: 1.2rem;
    font-weight: bold;
    padding: 0.8rem 0;
  }

  .quantity-container {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.8rem 0;
  }

  .quantityInCart {
      margin: 0 1rem;
  }
  `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleItemComponent {
  @Input() article: Article;
  @Output() articleQuantityChange = new EventEmitter<{ article: Article, quantity: number }> ();

  constructor() {
    this.article = {
      id: 1,
      name: 'Nike Court Vision Low',
      imageUrl: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/818bb456-4fb5-49c9-bc6c-51d7f4d0f371/court-vision-low-zapatillas-1xL2Lc.png',
      price: 45,
      isOnSale: false,
      quantityInCart: 0
    };
  }

  decrement(): void {
    if (this.article.quantityInCart > 0) {
      this.article.quantityInCart--;
      this.articleQuantityChange.emit({ article: this.article, quantity: this.article.quantityInCart });
    }
  }

  increment(): void {
    this.article.quantityInCart++;
    this.articleQuantityChange.emit({ article: this.article, quantity: this.article.quantityInCart });
  }

}
