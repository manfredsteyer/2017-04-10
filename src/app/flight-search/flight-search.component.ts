import { Flight } from './../entities/flight';
import { Component } from '@angular/core';
import { Http, URLSearchParams, Headers } from "@angular/http";

@Component({
    selector: 'flight-search',
    templateUrl: './flight-search.component.html'
})
export class FlightSearchComponent {

    from: string;
    to: string;
    flights: Array<Flight> = [];
    
    selectedFlight: Flight;

    constructor(private http: Http) {
    }

    search(): void {
        
        let url = 'http://www.angular.at/api/flight';

        let search = new URLSearchParams();
        search.set('from', this.from);
        search.set('to', this.to);

        let headers = new Headers();
        headers.set('Accept', 'application/json');

        this
            .http
            .get(url, { search, headers  })
            .map(resp => resp.json())
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