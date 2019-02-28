import { Injectable } from '@angular/core';
import { merge, Observable, of } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Todo, TodoItem } from '../models/todo';
import { TodoService } from '../services/todo.service';

@Injectable()
export class TodoTestService extends TodoService {
  private _items: Todo[] = [
    {
      identifier: '1',
      title: 'test',
      todoItems: [
        {
          identifier: '1',
          text: 'Test',
          checked: false
        }
      ]
    }
  ];

  public test_counters = {
    updateTodoWall: 0,
    all: 0,
    createTodo: 0
  };

  public items$: Observable<Todo[]> = merge(of(undefined), this._trigger).pipe(
    flatMap(_ => this.all())
  );

  public showNewTodoBlock = false;

  constructor() {
    super(undefined);
  }

  public updateTodoWall() {
    this._trigger.next();
  }

  public all(): Observable<Todo[]> {
    return of(this._items);
  }

  public createTodo(todo: Todo): Observable<Todo> {
    todo.identifier = new Date().getTime() + '';
    this._items.push(todo);
    return of(todo);
  }

  public updateTodo(todo: Todo): Observable<Todo> {
    const item = this._items.find(t => t.identifier === todo.identifier);
    if (item) {
      todo.title = todo.title;
      todo.todoItems = [...todo.todoItems];
    }

    return of(item);
  }

  public deleteTodo(todo: Todo): Observable<boolean> {
    const itemIndex = this._items.findIndex(
      t => t.identifier === todo.identifier
    );
    if (itemIndex !== -1) {
      this._items.splice(itemIndex, 1);
    }

    return of(true);
  }

  public addTodoItem(todo: Todo, text: string): Observable<boolean> {
    const item = this._items.find(t => t.identifier === todo.identifier);
    if (item) {
      item.todoItems = [
        ...item.todoItems,
        { identifier: new Date().getTime() + '', text: text, checked: false }
      ];
    }

    return of(true);
  }

  public toggleItem(todo: Todo, todoItem: TodoItem): Observable<boolean> {
    const item = this._items.find(t => t.identifier === todo.identifier);
    if (item) {
      const ti = item.todoItems.find(t => t.identifier === todoItem.identifier);
      ti.checked = !ti.checked;
    }

    return of(true);
  }
}
