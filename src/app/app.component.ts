import { Component,ViewChild,OnInit,ViewEncapsulation,AfterViewInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit, AfterViewInit  {




    constructor(private router: Router) {

    }
    ngOnInit() {

    }
    ngAfterViewInit() {

        // this returns null
    }
onClickSideMenu(url){
    this.router.navigateByUrl(url);
}


}
