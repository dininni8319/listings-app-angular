import { Component } from '@angular/core';
import { Housinglocation } from './housinglocation';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'lists-houses-app';

  housingLocation: Housinglocation[] = [ 
    {
      id: 1,
      name: "Test Home",
      city: "Test City",
      state: "Test State",
      photo: "https://picsum.photos/200/300",
      availableUnits: 2,
      wify: true,
      laundry: false
    },
    {
      id: 2,
      name: "Test2 Home",
      city: "Test2 City",
      state: "Test2 State",
      photo: "https://picsum.photos/200/300",
      availableUnits: 4,
      wify: true,
      laundry: false
    },
    {
      id: 3,
      name: "Test3 Home",
      city: "Test3 City",
      state: "Test3 State",
      photo: "https://picsum.photos/200/300",
      availableUnits: 5,
      wify: true,
      laundry: true
    },
    {
      id: 4,
      name: "Test4 Home",
      city: "Test4 City",
      state: "Test4 State",
      photo: "https://picsum.photos/200/300",
      availableUnits: 1,
      wify: false,
      laundry: true
    },
    {
      id: 5,
      name: "Test5 Home",
      city: "Test5 City",
      state: "Test5 State",
      photo: "https://picsum.photos/200/300",
      availableUnits: 6,
      wify: true,
      laundry: true
    },
  ];

  houses = JSON.stringify(this.housingLocation)

  ngOnInit(): void {
    initFlowbite();
  }
}
