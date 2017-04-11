import { FlightService } from './flight.service';
import { Observable } from 'rxjs';
import { FlightSearchModule } from './flight-search.module';
import { HttpModule } from '@angular/http';
import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlightCardComponent } from './flight-card.component';
import { FlightSearchComponent } from './flight-search.component';
import { TestBed, async } from '@angular/core/testing';

import 'rxjs/add/operator/map';


let dummyFlightService = {
  find(from: string, to: string) {
    return Observable.of([{ id: 4711, from: 'Graz', to: 'Hamburg', date: '' }])
  }
};

describe('FlightSearchComponent', () => {
  
  beforeEach(async(() => {
    
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        HttpModule
      ],
      declarations: [
        FlightSearchComponent,
        FlightCardComponent
      ],
    }).compileComponents();

    TestBed.overrideComponent(FlightSearchComponent, {
      set: {
        providers: [
          { provide: FlightService, useValue: dummyFlightService}
        ]
      }
    }).compileComponents();

    /*
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        FlightSearchModule
      ],
      declarations: [
        FlightSearchComponent,
        FlightCardComponent
      ],
    }).compileComponents();
    */


  }));

  it('should have an undefined selectedFlight initially', () => {
    const fixture = TestBed.createComponent(FlightSearchComponent);
    const comp = fixture.componentInstance;
    expect(comp.selectedFlight).toBeUndefined();
  });

  it('should not load flights without from and/or to', (done: Function) => {
    const fixture = TestBed.createComponent(FlightSearchComponent);
    const comp = fixture.componentInstance;
    let hasFlights = true;

    comp.to = '';
    comp.from = '';
    comp.search()
      .then(() => { 
        hasFlights = true;
      })
      .catch(() => { 
        hasFlights = false;
      })
      .then(() => { 
        expect(hasFlights).toBeFalsy();
        done();
      });

  });

  it('should  load flights with from and to', (done: Function) => {
    const fixture = TestBed.createComponent(FlightSearchComponent);
    const comp = fixture.componentInstance;
    let hasFlights = true;

    comp.from = 'Graz';
    comp.to = 'Hamburg';

    comp.search()
      .then(() => { 
        hasFlights = true;
      })
      .catch((err) => { 
        console.error('Fehler beim Laden' , err);
        hasFlights = false;
      })
      .then(() => { 
        expect(hasFlights).toBeTruthy();
        expect(comp.flights.length).toBe(1);
        console.debug('got flights', comp.flights);
        done();
      });

  });


});