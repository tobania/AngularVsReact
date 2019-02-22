import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'div[app-new-todo]',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {
  model: Todo = { title: '', identifier: undefined, todoItems: [] };

  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  save() {
    this.todoService.createTodo(this.model).subscribe(a => {
      this.model = { title: '', identifier: undefined, todoItems: [] };
      this.todoService.showNewTodoBlock = false;
      this.todoService.updateTodoWall();
    });
  }
}
