import { PassengerSearchComponent } from './../passenger-search/passenger-search.component';
import { FlightEditComponent } from './../flight-edit/flight-edit.component';
import { FlightSearchComponent } from './flight-search.component';
import { Routes, RouterModule } from '@angular/router';


const FLIGHT_SEARCH_ROUTES: Routes = [
    {
        path: 'flight-search',
        component: FlightSearchComponent
    },
    {
        path: 'flight-edit/:id',
        component: FlightEditComponent
    },
    {
        path: 'passenger-search',
        component: PassengerSearchComponent
    },

];

export const FlightSearchRoutes = RouterModule.forChild(FLIGHT_SEARCH_ROUTES);