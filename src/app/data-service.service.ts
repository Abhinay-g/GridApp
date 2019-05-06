import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  constructor(private _httpClient: HttpClient) {}
  getData() {
    return this._httpClient.get(`http://localhost:3000/getUserData`).pipe(
      map(data => {
        const arr = [];
        console.log(data);
        // console.log(typeof data);
        const temp = JSON.stringify(data);
        Array.from(JSON.parse(temp)).forEach(item => {
          arr.push(this.flattenObject(item));
        });
        return arr;
      })
    );
  }
  flattenObject = obj => {
    const flattened = {};

    Object.keys(obj).forEach(key => {
      if (typeof obj[key] === 'object') {
        Object.assign(flattened, this.flattenObject(obj[key]));
      } else {
        flattened[key] = obj[key];
      }
    });

    return flattened;
  }
}
