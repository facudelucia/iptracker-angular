import { AppState } from './../../app.reducer';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GeoService } from 'src/app/services/geo.service';

@Component({
  selector: 'app-info-container',
  templateUrl: './info-container.component.html',
  styleUrls: ['./info-container.component.css'],
})
export class InfoContainerComponent implements OnInit {

  location!: any
  locationExists: boolean = false
  ip!: any
  error: boolean = false
  msgError: string = 'Pruebe con otra direccion IP'
  constructor(public _geoApi: GeoService, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.locationExists = false
    this.store.select('location')
      .subscribe(resp => {
        if (resp.country == 'ZZ') {
          this.error = true
          return
        }
        this.location = resp
        if (Object.keys(resp).length) {
          this.error = false
          this.locationExists = true
        } else {
          this.error = false
          this.locationExists = false
        }
      })
    this.store.select('ip')
      .subscribe(resp => this.ip = resp)
  }

}