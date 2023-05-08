import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';
import { ArticleQuantityChange } from '../models/article-quantity-change';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit{
  // Array de objetos Article
  articles: Article[] = [
    { 
      id: 1, 
      name: 'Nike Court Vision Low', 
      imageUrl: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/818bb456-4fb5-49c9-bc6c-51d7f4d0f371/court-vision-low-zapatillas-1xL2Lc.png',
      price: 45,
      isOnSale: true,
      quantityInCart: 0 
    },
    { id: 2, 
      name: 'Nike Dunk Low', 
      imageUrl: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ba65b84e-8236-42e1-a3a1-1396a0f4460e/dunk-low-zapatillas-fhBsJ7.png', 
      price: 120, 
      isOnSale: true, 
      quantityInCart: 0 
    },
    { id: 3, 
      name: 'Nike Waffle One Leather', 
      imageUrl: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/322e3673-cbb9-4eb4-865f-089e0a29dcda/waffle-one-leather-zapatillas-G28TpK.png', 
      price: 60, 
      isOnSale: false, 
      quantityInCart: 0 
    }
  ];

  ngOnInit(): void { }
  
  // Este método es llamado cuando cambia la cantidad de un artículo en el componente hijo
  onArticleQuantityChange(event: ArticleQuantityChange) {
    // Buscamos el índice del artículo que ha cambiado
    const articleIndex = this.articles.findIndex(article => article.id === event.article.id);
    // Actualizamos la cantidad de ese artículo en el array de artículos
    this.articles[articleIndex].quantityInCart = event.quantity;
  }
}