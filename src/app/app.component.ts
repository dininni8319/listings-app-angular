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
  listOfQueries: string[] = []

  stringOfQueries = JSON.stringify(this.listOfQueries)

  filteredLocations: Housinglocation[] = []
  housingLocation: Housinglocation[] = [ 
    {
      id: 1,
      name: "Test Home",
      city: "Test City",
      state: "California",
      photo: "https://picsum.photos/200/300",
      availableUnits: 2,
      wify: true,
      laundry: false
    },
    {
      id: 2,
      name: "Test2 Home",
      city: "Test2 City",
      state: "Washington",
      photo: "https://picsum.photos/200/300",
      availableUnits: 4,
      wify: true,
      laundry: false
    },
    {
      id: 3,
      name: "Test3 Home",
      city: "Test3 City",
      state: "Washington",
      photo: "https://picsum.photos/200/300",
      availableUnits: 5,
      wify: true,
      laundry: true
    },
    {
      id: 4,
      name: "Test4 Home",
      city: "Test City",
      state: "New Mexico",
      photo: "https://picsum.photos/200/300",
      availableUnits: 1,
      wify: false,
      laundry: true
    },
    {
      id: 5,
      name: "Test5 Home",
      city: "California",
      state: "Test5 State",
      photo: "https://picsum.photos/200/300",
      availableUnits: 6,
      wify: true,
      laundry: true
    },
  ];

  ngOnInit(): void {
    initFlowbite();
  }

  filterSearchedListings(query: string){
    this.listOfQueries.push(query)

    this.filteredLocations = this.housingLocation.filter(
      listing => listing.state.toLowerCase().includes(
        query.toLowerCase()
      )
    )
    if (this.filteredLocations.length === 0) {
      alert("I did not find any locations, try another state, thank you!")
    }
  }

  deleteListing(listing: number){
    this.housingLocation = this.housingLocation.filter(location => location.id !== listing)
  }
}
