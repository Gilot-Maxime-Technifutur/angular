import { Injectable } from '@angular/core';
import { Table1Component } from 'src/app/modules/demo/services/table1/table1.component';
import { Table2Component } from 'src/app/modules/demo/services/table2/table2.component';
import { user } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  users: user[] = []

  constructor() { }

  addUser(u : user){
    this.users.push(u)
  }

  removeUser(index : number){
    this.users.splice(index, 1)
  }
}

