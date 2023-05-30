import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { AppComponent } from 'app/app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private appComponent: AppComponent, private location: Location) {}

  showArticleList() {
    this.appComponent.currentComponent = 'articleList';
    this.location.go('/articleList');
  }

  showArticleNewTemplate() {
    this.appComponent.currentComponent = 'newArticleTemplate';
    this.location.go('/newArticleTemplate');
  }
}