import { Component, Output, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent {
 @Input('house') house:Housinglocation | undefined;
 @Output() deleteQueryEventEmit = new EventEmitter<number>()

 constructor(){}

 onDeleteLocation(id: any) {
  this.deleteQueryEventEmit.emit(id) 
 }
}
