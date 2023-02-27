import { Component } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.scss']
})
export class BindingsComponent {

  maVariable : string = 'Bonjour Techni'

  maFonction(){
    this.maVariable = "Pourquoi tu cliques toi ?"
  }

  isOpen : boolean = true

  invertOpen(){
    this.isOpen = !this.isOpen
  }

}
