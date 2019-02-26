import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TodoService } from 'src/app/services/todo.service';

import { NewTodoComponent } from './new-todo/new-todo.component';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { TodoItemComponent } from './todo-card/todo-item/todo-item.component';
import { TodoComponent } from './todo.component';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodoComponent,
        TodoCardComponent,
        TodoItemComponent,
        NewTodoComponent
      ],
      imports: [FormsModule, HttpClientModule],
      providers: [TodoService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
