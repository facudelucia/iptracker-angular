import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet'
import { LocationClass } from 'src/app/interfaces/ilocation.interface';
import { GeoService } from 'src/app/services/geo.service';

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.css'],
})
export class MapContainerComponent implements OnInit {
  long!: number;
  lat!: number;
  map!: L.Map;
  loading: boolean = true
  constructor(private geoService: GeoService) { }

  ngOnInit() {
    this.loading = true
    this.geoService.location$.subscribe((location: LocationClass) => {
      this.long = location.lng
      this.lat = location.lat
      if (Object.keys(location).length) {
        this.loading = false
        if (this.map) {
          this.map.remove()
          this.createMap();
        } else {
          this.createMap();
        }

      }
    })
  }


  createMap() {
    this.map = L.map('map-container', {
      center: [this.lat, this.long],
      zoom: 14,
      dragging: true,
      zoomControl: true,
      attributionControl: false,
    });
    this.configMap();
    this.createMarket();
  }

  configMap() {
    L.tileLayer(
      `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZmFjdWRlbHVjaWEiLCJhIjoiY2xlYW4xZmRvMGRuczN3cHBjaXQ3YjEybSJ9.Nxhst_oPOQ3EJy57CEHD5g`,
      {
        maxZoom: 18,
        noWrap: true,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiZmFjdWRlbHVjaWEiLCJhIjoiY2xlYW4xZmRvMGRuczN3cHBjaXQ3YjEybSJ9.Nxhst_oPOQ3EJy57CEHD5g',
      }
    ).addTo(this.map);
  }

  createMarket() {
    const marketDefault = L.icon({
      iconUrl: 'assets/icon-location.svg',
      iconSize: [30, 40],
      iconAnchor: [15, 40],
    });
    L.Marker.prototype.options.icon = marketDefault;
    L.marker([this.lat, this.long])
      .addTo(this.map)
      .bindPopup('Estas aqui')
      .openPopup();
  }
}