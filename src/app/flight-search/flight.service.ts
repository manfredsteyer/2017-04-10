import { Flight } from './../entities/flight';
import { Http, URLSearchParams, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

@Injectable()
export class FlightService {

    constructor(private http: Http) { 
        console.debug('Service ctor');
    }

    flights: Flight[] = [];

    // Flight[] == Array<Flight>

    find(from: string, to: string): void {
        
        let url = 'http://www.angular.at/api/flight';

        let search = new URLSearchParams();
        search.set('from', from);
        search.set('to', to);

        let headers = new Headers();
        headers.set('Accept', 'application/json');

        this
                .http
                .get(url, { search, headers  })
                .map(resp => resp.json())
                .subscribe(
                    flights => {
                        this.flights = flights;
                    },
                    err => {
                        console.error('Fehler beim Laden', err);
                    }

                );
    }

}