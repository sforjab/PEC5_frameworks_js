import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ArticleItemComponent } from './article-item/article-item.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ArticleNewTemplateComponent } from './article-new-template/article-new-template.component';

/* const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: ArticleListComponent },
  { path:'', component: ArticleListComponent },
  { path: 'articles', component: ArticleListComponent },
  { path: 'new-article-template', component: ArticleNewTemplateComponent }
  { path: 'new-article-reactive', component: ArticleNewReactiveComponent }
]; */

@NgModule({
  declarations: [
    AppComponent,
    ArticleItemComponent,
    ArticleListComponent,
    NavbarComponent,
    ArticleNewTemplateComponent
  ],
  imports: [
    BrowserModule,
    //RouterModule.forRoot(routes),  // Para configurar las rutas
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
