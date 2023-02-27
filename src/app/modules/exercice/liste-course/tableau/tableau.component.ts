import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { item } from 'src/app/shared/models/item';
import { ShopListService } from 'src/app/shared/services/shop-list/shop-list.service';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss']
})
export class TableauComponent {

  constructor(private _shopListService : ShopListService){}

  get items() : item[]{
    return this._shopListService.items
  }

  quantities : number[] = []

  removeItem(index : number){

    this._shopListService.removeItem(index, this.quantities[index])

    this.quantities = []

}


}
