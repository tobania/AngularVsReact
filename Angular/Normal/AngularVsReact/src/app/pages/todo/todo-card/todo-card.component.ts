import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit {
  @Input() model: Todo;

  newTodoItem: { text: string } = { text: '' };

  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  addItem() {
    this.todoService
      .addTodoItem(this.model, this.newTodoItem.text)
      .subscribe(res => {
        this.newTodoItem = { text: '' };
        this.todoService.updateTodoWall();
      });
  }
}
