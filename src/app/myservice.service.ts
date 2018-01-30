import {EventEmitter, Injectable} from '@angular/core';
import {Produkt} from "./produkt";
import {ListUpdateEvent} from "./listUpdateEvent";

@Injectable()
export class MyserviceService {
    public onChange: EventEmitter<ListUpdateEvent> = new EventEmitter<ListUpdateEvent>();

    constructor() {
    }

    addProdukt(produkt: Produkt): void {
        this.onChange.emit({});
    }
}
