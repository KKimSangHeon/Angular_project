import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class VerifyImageListService {

  constructor(private http: Http) {
  }


  getPSNR(URL:string): Observable<any> {
    return this.http.get(URL)
    .map(response => response);
  }

}
