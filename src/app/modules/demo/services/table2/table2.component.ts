import { Component } from '@angular/core';
import { retry } from 'rxjs';
import { user } from 'src/app/shared/models/user';
import { DemoService} from 'src/app/shared/services/demo-service/demo.service';

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.scss']
})
export class Table2Component {

  get users() : user[]{
    return this._demoService.users
  }

  constructor(private _demoService : DemoService){}

  removeUser(index : number){
    this._demoService.removeUser(index)
  }

}
