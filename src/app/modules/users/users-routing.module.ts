import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadUserComponent } from './read-user/read-user.component';

const routes: Routes = [
  {path : 'read', component : ReadUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
