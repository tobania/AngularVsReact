import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { merge, Observable, of, Subject } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

import { Todo, TodoItem } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private _urlBase = `${environment.apiRoot}/todos`;

  private _trigger: Subject<void> = new Subject<void>();

  public items$: Observable<Todo[]> = merge(of(undefined), this._trigger).pipe(
    flatMap(_ => this.all())
  );
  public showNewTodoBlock = false;

  constructor(private httpClient: HttpClient) {}

  public updateTodoWall() {
    console.log('updating');
    this._trigger.next();
  }

  public all(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this._urlBase);
  }

  public createTodo(todo: Todo): Observable<Todo> {
    return this.httpClient.post<Todo>(this._urlBase, todo, {});
  }

  public updateTodo(todo: Todo): Observable<Todo> {
    return this.httpClient.put<Todo>(
      `${this._urlBase}/${todo.identifier}`,
      todo,
      {}
    );
  }

  public deleteTodo(todo: Todo): Observable<boolean> {
    return this.httpClient
      .delete<Todo>(`${this._urlBase}/${todo.identifier}`, {
        observe: 'response'
      })
      .pipe(map(resp => resp.status === 204));
  }

  public addTodoItem(todo: Todo, text: string): Observable<boolean> {
    return this.httpClient
      .post(
        `${this._urlBase}/${todo.identifier}/items`,
        { text: text },
        {
          observe: 'response'
        }
      )
      .pipe(map(resp => resp.status === 204));
  }

  public toggleItem(todo: Todo, todoItem: TodoItem): Observable<boolean> {
    return this.httpClient
      .post(
        `${this._urlBase}/${todo.identifier}/items/${todoItem.identifier}`,
        todoItem,
        {
          observe: 'response'
        }
      )
      .pipe(map(resp => resp.status === 204));
  }
}
