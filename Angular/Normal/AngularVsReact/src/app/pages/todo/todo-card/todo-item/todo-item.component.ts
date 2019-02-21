import { Component, Input, OnInit } from '@angular/core';
import { Todo, TodoItem } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'li[app-todo-item]',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Input() model: TodoItem;

  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  toggled() {
    this.todoService.toggleItem(this.todo, this.model).subscribe(state => {
      this.todoService.updateTodoWall();
    });
  }
}
