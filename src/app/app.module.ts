import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ArticleItemComponent } from './article-item/article-item.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  //{ path: '', redirectTo: 'inicio', pathMatch: 'full' },
  //{ path: 'inicio', component: ArticleListComponent },
  { path:'', component: ArticleListComponent },
  { path: 'articles', component: ArticleListComponent }
/*   { path: 'new-article-template', component: ArticleNewTemplateComponent },
  { path: 'new-article-reactive', component: ArticleNewReactiveComponent } */
];

@NgModule({
  declarations: [
    AppComponent,
    ArticleItemComponent,
    ArticleListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)  // Para configurar las rutas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
