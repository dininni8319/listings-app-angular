import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HousingLocationComponent } from './housing-location/housing-location.component';
import { CardComponent } from './card/card.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { SearchedQueryListComponent } from './searched-query-list/searched-query-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HousingLocationComponent,
    CardComponent,
    SearchFormComponent,
    SearchedQueryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
