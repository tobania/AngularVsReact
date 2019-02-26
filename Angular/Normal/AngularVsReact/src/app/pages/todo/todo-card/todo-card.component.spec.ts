import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TodoService } from 'src/app/services/todo.service';
import { _TodoTestService } from 'src/app/testing/todo.testservice';

import { TodoCardComponent } from './todo-card.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

describe('TodoCardComponent', () => {
  let component: TodoCardComponent;
  let fixture: ComponentFixture<TodoCardComponent>;
  const service = new _TodoTestService();
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoCardComponent, TodoItemComponent],
      imports: [HttpClientModule, FormsModule],
      providers: [{ provide: TodoService, useValue: service }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoCardComponent);
    component = fixture.componentInstance;
    component.model = service._items[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should add an item, when filled in', () => {
    const itemWeAdd = { text: 'TestItem' + new Date().getTime() };
    component.newTodoItem = itemWeAdd;
    component.addItem();
    debugger;
    expect(
      component.model.todoItems.find(ti => ti.text === itemWeAdd.text)
    ).toBeTruthy();
    expect(service.addTodoItem).toHaveBeenCalled();
  });
});
