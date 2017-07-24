import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {MyAd} from './components/AdvertisementFormComponent';
import {DisplayAd} from './components/AdvertisementTableComponent';
import {SearchAd} from './components/searchCustomPipe';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,MyAd, DisplayAd, SearchAd],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
