import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Article } from 'app/models/article';

@Component({
  selector: 'app-article-new-template',
  templateUrl: './article-new-template.component.html',
  styleUrls: ['./article-new-template.component.css']
})

export class ArticleNewTemplateComponent {
  // Añadimos el modificador '!' para indicar que la propiedad será inicializada en algún momento antes de su uso
  public article!: Article;

  constructor() {}

  createArticle(articleForm: NgForm) {
    if (articleForm.valid) {
      this.article = articleForm.value.article;
      if (typeof this.article.isOnSale === 'undefined') {
        this.article.isOnSale = false; // Establecemos a false por defecto si no se ha rellenado el campo
      }
      console.log('Creando artículo', this.article);
    } else {
      console.log('Formulario no válido');
    }
  }
}
