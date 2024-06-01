import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ILocation, IP, LocationClass } from '../interfaces/ilocation.interface';

@Injectable({
  providedIn: 'root',
})

export class GeoService {

  public defaultLocation: LocationClass = {
    country: 'Default Country',
    region: 'Default Region',
    city: 'Default City',
    lat: 0.0,
    lng: 0.0,
    postalCode: '00000',
    timezone: 'Default Timezone',
    geonameId: 0
  };

  public ip: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public location: BehaviorSubject<LocationClass> = new BehaviorSubject<LocationClass>(this.defaultLocation);

  public ip$: Observable<string> = this.ip.asObservable()
  public location$: Observable<LocationClass> = this.location.asObservable()

  constructor(private http: HttpClient) { }

  getInfoLocation(): Observable<IP> {
    return this.http.get<IP>('https://api.ipify.org?format=json')
  }

  getLocation(ip: string): Observable<ILocation> {
    return this.http.get<ILocation>(`
    https://geo.ipify.org/api/v1?apiKey=at_9duPboPWszokPXWMPxGIimhLCcusj&ipAddress=${ip}`)
  }

  public setIp(ip: string): void {
    this.ip.next(ip)
  }

  public setLocation(location: LocationClass): void {
    this.location.next(location)
  }
}