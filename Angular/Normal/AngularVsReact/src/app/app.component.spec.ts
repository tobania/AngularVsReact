import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { async, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRouteModule } from './appRouter.module';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { NewTodoComponent } from './pages/todo/new-todo/new-todo.component';
import { TodoCardComponent } from './pages/todo/todo-card/todo-card.component';
import { TodoItemComponent } from './pages/todo/todo-card/todo-item/todo-item.component';
import { TodoComponent } from './pages/todo/todo.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavBarComponent,
        TodoComponent,
        TodoCardComponent,
        TodoItemComponent,
        NewTodoComponent
      ],
      imports: [AppRouteModule, HttpClientModule, FormsModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
