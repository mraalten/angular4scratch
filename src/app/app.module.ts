import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {BoodschappenLijstComponent} from './boodschappen-lijst/boodschappen-lijst.component';
import {ProduktgroepenComponent} from './produktgroepen/produktgroepen.component';
import {ProduktenComponent} from './produkten/produkten.component';
import {MyserviceService} from "./myservice.service";

@NgModule({
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent,
        BoodschappenLijstComponent,
        ProduktgroepenComponent,
        ProduktenComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [
        MyserviceService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
