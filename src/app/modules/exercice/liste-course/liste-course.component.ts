import { Component } from '@angular/core';
import { item } from 'src/app/shared/models/item';
import { ShopListService } from 'src/app/shared/services/shop-list/shop-list.service';

@Component({
  selector: 'app-liste-course',
  templateUrl: './liste-course.component.html',
  styleUrls: ['./liste-course.component.scss']
})
export class ListeCourseComponent {

  constructor(private _shopListService : ShopListService){}

  name : string = ''

  quantity : number = 0

  addItem(){

    this._shopListService.addItem(this.name, this.quantity)

  }



}

