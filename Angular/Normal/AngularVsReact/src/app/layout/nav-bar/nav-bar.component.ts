import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  public addTodo() {
    this.todoService.showNewTodoBlock = true;
  }
}
