import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})

export class SearchFormComponent {
  @Output() newQueryEventEmit = new EventEmitter<string>() 

  search(query: string) {
    if (query.length === 0) {
      alert('Mr. please enter a proper value!')
      return
    }
    this.newQueryEventEmit.emit(query)
  }
}
