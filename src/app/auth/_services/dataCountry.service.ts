import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountryFormatMap } from '../../model/country-format-map';
import { DataCountry } from '../../model/data-country'
import { CountryTreeGrid } from '../../model/country-tree-grid';
import { map } from 'rxjs/operators';

//const API_URL = 'http://covid-map-2020-back-end.herokuapp.com/api/test/';
const API_URL = 'https://covid-map-2020-back-end.herokuapp.com/api/test/';

@Injectable({
  providedIn: 'root'
})
export class DataCountryService {
  dataCountries: DataCountry[];
  dataCountrieById:DataCountry;
  dataCountriesFormatMap: CountryFormatMap;
  dataCountriesTreeGrid: CountryTreeGrid;

  constructor(private http: HttpClient) { }

  getDataCountries(): Observable<any> {
    return this.http.get(API_URL + 'dataCountries');
  }
  getDataCountrieById(id:number): Observable<any> {
    return this.http.get(API_URL + `dataCountries/${id}`)
    .pipe(
        map(res => res[0]) // or any other operator
      )
  }
  getDataCountriesFormatMap(): Observable<any> {
    return this.http.get(API_URL + 'getDataCountriesFormatMap');
  }
  getDataCountriesTreeGrid(): Observable<any> {
    return this.http.get(API_URL + 'getDataCountriesTreeGrid');
  }
}
