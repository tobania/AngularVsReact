import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRouteModule } from './appRouter.module';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { NewTodoComponent } from './pages/todo/new-todo/new-todo.component';
import { TodoCardComponent } from './pages/todo/todo-card/todo-card.component';
import { TodoItemComponent } from './pages/todo/todo-card/todo-item/todo-item.component';
import { TodoComponent } from './pages/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TodoComponent,
    NewTodoComponent,
    TodoItemComponent,
    TodoCardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRouteModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
