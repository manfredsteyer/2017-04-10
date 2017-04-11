import { Flight } from './../entities/flight';
import { Component, OnInit, OnChanges, Input, EventEmitter, Output  } from '@angular/core';

@Component({
    selector: 'flight-card',
    templateUrl: './flight-card.component.html'
})
export class FlightCardComponent implements OnInit, OnChanges  {

    @Input() item: Flight;
    @Input() selected: boolean;
    @Output() selectedChange = new EventEmitter<boolean>();

    constructor() { 
        console.debug('ctor', this.item, this.selected);
    }

    ngOnInit() {
        console.debug('ngOnInit', this.item, this.selected);
        // this.selectedChange.next(true);
    }

    ngOnChanges(change) {

        if (change.item) {
            console.debug('ngOnChanges:item', this.item);
        }
        if (change.selected) {
            console.debug('ngOnChanges:selected', this.selected);
        }
    }

    select() {
        this.selected = true;
        this.selectedChange.next(this.selected);
    }

    deselect() {
        this.selected = false;
        this.selectedChange.next(this.selected);
    }
    
}