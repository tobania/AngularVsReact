import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoComponent } from './pages/todo/todo.component';

const routes: Routes = [
  {
    path: 'todos',
    component: TodoComponent
  },
  {
    path: '**',
    redirectTo: 'todos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRouteModule {}
