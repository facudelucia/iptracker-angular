import { AppState } from './../../app.reducer';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as L from 'leaflet'

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.css'],
})
export class MapContainerComponent implements OnInit {
  long!: any;
  lat!: any;
  map!: L.Map;
  loading: boolean = true
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.loading = true
    this.store.select('location')
      .subscribe(resp => {
        this.long = resp.lng
        this.lat = resp.lat
        if (Object.keys(resp).length) {
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
      `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZmFjdWRlbHVjaWEiLCJhIjoiY2twMnozYmZhMTRydjJ0cHEyM25meDJsMCJ9.pPssLZmNbxFCZlzWXyRA-Q`,
      {
        maxZoom: 18,
        noWrap: true,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiZmFjdWRlbHVjaWEiLCJhIjoiY2twMnozYmZhMTRydjJ0cHEyM25meDJsMCJ9.pPssLZmNbxFCZlzWXyRA-Q',
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