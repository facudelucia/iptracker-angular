import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MapContainerComponent } from './components/map-container/map-container.component';
import { InfoContainerComponent } from './components/info-container/info-container.component';
import { InfoItemComponent } from './components/info-item/info-item.component';
import { HttpClientModule } from '@angular/common/http'
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MapContainerComponent,
    InfoContainerComponent,
    InfoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LeafletModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
