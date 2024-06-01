import { GeoService } from 'src/app/services/geo.service';
import { Component, OnInit } from '@angular/core';
import { ILocation, IP } from './interfaces/ilocation.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'ipTracker';

  constructor(private geoService: GeoService) {

  }

  ngOnInit() {
    this.geoService.getInfoLocation()
      .subscribe((resp: IP) => {
        this.geoService.getLocation(resp.ip)
          .subscribe((resp: ILocation) => {
            this.geoService.setLocation(resp.location)
            this.geoService.setIp(resp.ip)
          })

      })
  }

  prueba(event: string) {
    if (!isNaN(Number(event)) || event.trim().length < 0) {
      return
    }
    this.geoService.getLocation(event)
      .subscribe(resp => {
        this.geoService.setLocation(resp.location)
      })
  }
}
