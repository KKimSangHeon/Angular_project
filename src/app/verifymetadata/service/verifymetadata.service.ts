import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Injectable()
export class VerifyMetadataService {

  constructor(private http: Http) {
  }

  getData(URL:string): Observable<any> {
    return this.http.get(URL)
    .map(response => response.json());
  }
}
