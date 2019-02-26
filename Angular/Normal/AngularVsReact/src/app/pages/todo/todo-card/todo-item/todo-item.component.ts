import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Todo, TodoItem } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'li[app-todo-item]',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  animations: [
    trigger('simpleFadeAnimation', [
      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({ opacity: 1 })),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [style({ opacity: 0 }), animate(1500)]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave', animate(1600, style({ opacity: 0 })))
    ])
  ]
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
