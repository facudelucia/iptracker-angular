import { setLocation } from './location/location.actions';
import { AppState } from './app.reducer';
import { GeoService } from 'src/app/services/geo.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { setIp } from './ip/ip.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ipTracker';
  constructor(private geoService: GeoService, private store: Store<AppState>) {

  }
  ngOnInit() {
    this.geoService.getInfoLocation()
      .subscribe((resp: any) => {
        this.geoService.getLocation(resp.ip)
          .subscribe(resp => {
            this.store.dispatch(setLocation(resp))
            this.store.dispatch(setIp(resp))
          })

      })
  }
  prueba(event: any) {
    if (!isNaN(Number(event)) || event.trim().length < 0) {
      return
    }
    this.geoService.getLocation(event)
      .subscribe(resp => {
        this.store.dispatch(setLocation(resp))
      })
  }
}
