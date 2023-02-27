import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.scss']
})
export class EnfantComponent {

  @Input()
  valeurEnfant : string = "valeur par default de l'enfant"

  @Output()
  monEvent : EventEmitter<string> = new EventEmitter<string>()



  emettreBonjour(){
    this.monEvent.emit('Bonjour')
  }

  emettreAuRevoir(){
    this.monEvent.emit('Au Revoir')
  }


}
