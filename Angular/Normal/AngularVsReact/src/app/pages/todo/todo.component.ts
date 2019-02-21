import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos$;
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todos$ = this.todoService.items$;
    this.todoService.updateTodoWall();
  }
}
