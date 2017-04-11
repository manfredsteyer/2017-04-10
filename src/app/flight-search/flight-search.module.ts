import { PassengerSearchComponent } from './../passenger-search/passenger-search.component';
import { FlightEditComponent } from './../flight-edit/flight-edit.component';
import { FlightSearchRoutes } from './flight-search.routes';
import { FlightCardComponent } from './flight-card.component';
import { FlightService } from './flight.service';
import { FlightSearchComponent } from './flight-search.component';
import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        FormsModule, 
        CommonModule, 
        SharedModule,
        FlightSearchRoutes
    ],
    declarations: [
        FlightSearchComponent,
        FlightCardComponent,
        FlightEditComponent,
        PassengerSearchComponent
    ],
    providers: [/* FlightService */],
    exports: [FlightSearchComponent],
})
export class FlightSearchModule { }
