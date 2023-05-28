import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  showArticleList: boolean = true;
  showArticleNewTemplate: boolean = false;
  showArticleNewReactive: boolean = false;

  // Funciones para cambiar la visibilidad de los componentes
  showList(): void {
    this.showArticleList = true;
    this.showArticleNewTemplate = false;
    this.showArticleNewReactive = false;
  }

  showNewTemplate(): void {
    this.showArticleList = false;
    this.showArticleNewTemplate = true;
    this.showArticleNewReactive = false;
  }

  showNewReactive(): void {
    this.showArticleList = false;
    this.showArticleNewTemplate = false;
    this.showArticleNewReactive = true;
  }
}
