import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../item";
import {ListUpdateEvent} from "../listUpdateEvent";
import {MyserviceService} from "../myservice.service";

@Component({
    selector: 'app-boodschappen-lijst',
    templateUrl: './boodschappen-lijst.component.html',
    styleUrls: ['./boodschappen-lijst.component.css']
})
export class BoodschappenLijstComponent implements OnInit {
    private consumer;

    private count: number = 4;

    @Input() items: Item[];

    constructor(myService: MyserviceService) {
        this.consumer = myService.onChange.subscribe({
            next: (event: ListUpdateEvent) => {
                var item = {
                    id: this.count,
                    name: 'produkt-' + this.count,
                    quantity: 1
                };
                this.items.push(item);
                this.count = this.count + 1;
            }
        })
    }

    ngOnInit() {
    }

}
