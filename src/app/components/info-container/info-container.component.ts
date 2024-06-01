import { Component, OnInit } from '@angular/core';
import { LocationClass } from 'src/app/interfaces/ilocation.interface';
import { GeoService } from 'src/app/services/geo.service';

@Component({
  selector: 'app-info-container',
  templateUrl: './info-container.component.html',
  styleUrls: ['./info-container.component.css'],
})
export class InfoContainerComponent implements OnInit {

  public location: LocationClass = this.geoService.defaultLocation
  public locationExists: boolean = false
  public ip: string = ''
  public error: boolean = false
  public msgError: string = 'Pruebe con otra direccion IP'

  constructor(private geoService: GeoService) { }

  ngOnInit(): void {
    this.locationExists = false
    this.geoService.location$.subscribe((location: LocationClass) => {
      this.location = location
      if (Object.keys(location).length) {
        this.error = false
        this.locationExists = true
      } else {
        this.error = false
        this.locationExists = false
      }
    })
    this.geoService.ip$.subscribe(ip => {
      this.ip = ip
    })
  }

}