import { FlightService } from './flight.service';
import { Flight } from './../entities/flight';
import { Component } from '@angular/core';
import { Http, URLSearchParams, Headers } from "@angular/http";

@Component({
    selector: 'flight-search',
    templateUrl: './flight-search.component.html',
    providers: [FlightService]
})
export class FlightSearchComponent {

    from: string;
    to: string;
    flights: Array<Flight> = [];
    
    selectedFlight: Flight;

    constructor(private flightService: FlightService) {
        console.debug('component');
    }

    search(): void {
        
        this.flightService
            .find(this.from, this.to)
            .subscribe(
                (flights: Flight[]) => {
                    this.flights = flights;
                },
                (err) => {
                    console.debug('Fehler', err);
                }
            )

    }

    select(f: Flight): void {
        this.selectedFlight = f;
    }

}