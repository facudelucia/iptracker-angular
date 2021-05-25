import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeoService {




  constructor(private http: HttpClient) { }
  
  getInfoLocation():Observable<any> {
    return this.http.get<any>('https://api.ipify.org?format=json')
  }

  getLocation(ip: any):Observable<any> {
    return this.http.get<any>(`
    https://geo.ipify.org/api/v1?apiKey=at_9duPboPWszokPXWMPxGIimhLCcusj&ipAddress=${ip}`)
  }
}