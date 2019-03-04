import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'filter-textbox',
    template: `
        Filter: <input type="text" [(ngModel)]="filter" />
    `
})
export class FilterTextboxComponent implements OnInit {

    private _filter: string;
    @Input() get filter() {
        return this._filter;
    }

    set filter(val: string) {
        this._filter = val;
        this.changed.emit(this.filter); //send the filter value from the filter box up to the parent
                                        //changed is coming from output() changed
    }

    @Output() changed: EventEmitter<string> = new EventEmitter<string>();


    constructor() {}

    ngOnInit() {

    }
}
