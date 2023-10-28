import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-searched-query-list',
  templateUrl: './searched-query-list.component.html',
  styleUrls: ['./searched-query-list.component.css']
})

export class SearchedQueryListComponent {
  @Input() listOfQueries: string[] = []
}
