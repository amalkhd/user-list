import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  getData(url: string, params?: object): Observable<any> {
    return this.http.get("https://api.github.com/" + url, {
      params: this.setUrlParams(params),
      responseType: "json"
    });
  }

  setUrlParams(params: object): HttpParams {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(function(key) {
      httpParams = httpParams.append(key, params[key]);
    });
    return httpParams;
  }
}
