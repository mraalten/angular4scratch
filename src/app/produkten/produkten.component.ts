import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {PRODUKTEN} from "../mock-produkten";
import {Item} from "../item";
import {Hero} from "../hero";
import {Produkt} from "../produkt";
import {ListUpdateEvent} from "../listUpdateEvent";
import {MyserviceService} from "../myservice.service";

@Component({
    selector: 'app-produkten',
    templateUrl: './produkten.component.html',
    styleUrls: ['./produkten.component.css']
})
export class ProduktenComponent implements OnInit {

    produkten = PRODUKTEN;

    constructor(
        private myService: MyserviceService
    ) {
    }

    ngOnInit() {
    }

    onSelect(produkt: Produkt): void {
        this.myService.addProdukt(produkt);
    }

}
