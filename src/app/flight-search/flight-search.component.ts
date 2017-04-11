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
    basket = {
        "3": true,
        "4": false,
        "5": true
    }

    selectedFlight: Flight;

    constructor(private flightService: FlightService) {
        console.debug('component');
    }

    search(): Promise<Flight[]> {
        
        if (!this.from || !this.to ) {
            return Promise.reject('from and to needed!');
        }

        return new Promise<Flight[]>((resolve: Function, reject: Function) => {
            this.flightService
                .find(this.from, this.to)
                .subscribe(
                    (flights: Flight[]) => {
                        this.flights = flights;
                        resolve(this.flights);
                    },
                    (err) => {
                        console.debug('Fehler', err);
                        reject(err);
                    }
                );
        });


    }

    select(f: Flight): void {
        this.selectedFlight = f;
    }

}