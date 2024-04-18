import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './myComponents/header/header.component';
import { FooterComponent } from './myComponents/footer/footer.component';
import { TodosComponent } from './myComponents/todos/todos.component';
import { TodoItemComponent } from './myComponents/todo-item/todo-item.component';
import { AddTodoComponent } from './myComponents/add-todo/add-todo.component';
import { NavbarComponent } from './myComponents/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './myComponents/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TodosComponent,
    TodoItemComponent,
    AddTodoComponent,
    NavbarComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
