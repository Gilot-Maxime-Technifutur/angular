import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-chronometre',
  templateUrl: './chronometre.component.html',
  styleUrls: ['./chronometre.component.scss']
})
export class ChronometreComponent {


  compteur : number = 0

  chrono! : any;

  isRunning : boolean = false;

  start(){
    this.chrono = setInterval(() => {this.compteur++}, 1000)
    this.isRunning = true;
  }

  pause(){
    clearInterval(this.chrono)
    this.isRunning = false;
  }

  stop(){
    this.pause();
    this.compteur = 0;
  }
}
