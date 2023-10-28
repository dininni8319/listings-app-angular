import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HousingLocationComponent } from './housing-location/housing-location.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HousingLocationComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
