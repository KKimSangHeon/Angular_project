import {Component, Inject, OnInit, OnDestroy,AfterViewInit,ChangeDetectorRef,Input} from '@angular/core';
import {Router} from '@angular/router';
import {VerifyImageListService} from '../service/verifyimagelist.service';
import { MatTableDataSource} from '@angular/material';



@Component({
  selector: 'app-verifyimagelist',
  templateUrl: './verifyimagelist.component.html',
  styleUrls: ['./verifyimagelist.component.scss'],
})
export class VerifyImageListComponent implements OnInit {

  displayedColumns = ['no', 'resizedStableServerImageURL', 'resizedDevServerImageURL', 'resizedResultImageURL','psnr'];

    //dataSource = ELEMENT_DATA;

     @Input() dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
    filsText:string;
    transparency = 3;
    imageURL:string = '';
    serverURL:string = '10.22222222222222.com';

    defaultImageURL:string ='http://duncanlock.net/images/posts/better-figures-images-plugin-for-pelican/dummy-200x200.png';

    resizedStableServerImageURL:string = this.defaultImageURL;
    resizedDevServerImageURL:string = this.defaultImageURL;
    resizedResultImageURL:string = this.defaultImageURL;
    originalStableServerImageURL:string;
    originalDevServerImageURL:string;
    originalVerifyImageURL:string;
    PSNRURL:string = '';
    psnr:string = '0';
    constructor(private verifyImageListService: VerifyImageListService,
                private cdr: ChangeDetectorRef) {
}


ngOnInit() {
  this.initData();

}
onClickClearButton() {

      this.initData();

      this.imageURL = '';
      this.transparency = 0;
      this.resizedStableServerImageURL = this.defaultImageURL;
      this.resizedDevServerImageURL = this.defaultImageURL;
      this.resizedResultImageURL = this.defaultImageURL;

      this.originalStableServerImageURL = '';
      this.originalDevServerImageURL = '';
      this.originalVerifyImageURL = '';

}

onClickVerifyButton() {
    this.initData();

      /*
          this.resizedStableServerImageURL = this.serverURL+ '?fileAddress=' +this.imageURL+'&method=delivery&server=stable&size=200x200&transparency='+this.transparency;
          this.resizedDevServerImageURL = this.serverURL+ '?fileAddress=' +this.imageURL+'&method=delivery&server=dev&size=200x200&transparency='+this.transparency;
          this.resizedResultImageURL = this.serverURL+ '?fileAddress=' +this.imageURL+'&method=verify&size=200x200&transparency='+this.transparency;

          this.originalStableServerImageURL = this.serverURL+ '?fileAddress=' +this.imageURL+'&method=delivery&server=stable&transparency='+this.transparency;
          this.originalDevServerImageURL = this.serverURL+ '?fileAddress=' +this.imageURL+'&method=delivery&server=dev&transparency='+this.transparency;
          this.originalVerifyImageURL = this.serverURL+ '?fileAddress=' +this.imageURL+'&method=verify&resType=image&transparency='+this.transparency;

          this.PSNRURL = this.serverURL+ '?fileAddress=' +this.imageURL+'&method=verify&resType=figure';


            아래 7줄 지우기
      */
      this.resizedStableServerImageURL = this.imageURL;
      this.resizedDevServerImageURL = this.imageURL;
      this.resizedResultImageURL = this.imageURL;
      this.originalStableServerImageURL = this.resizedStableServerImageURL;
      this.originalDevServerImageURL = this.resizedStableServerImageURL;
      this.originalVerifyImageURL = this.resizedStableServerImageURL;
      this.PSNRURL = 'http://validate.jsontest.com/?json=%7B%22key%22:%22value%22%7D';



      this.dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

      this.verifyImageListService.getPSNR(this.PSNRURL).subscribe(
      res => {
          console.log(res);
              this.psnr = res['_body'];

        },
      err => {
          this.psnr ='getPSNR err';
          console.log(err);
      }
    );

}


fileUpload(event) {

    var reader = new FileReader();
    reader.readAsText(event.srcElement.files[0]);
    reader.onload = function () {
    var splitted = reader.result.split("\n");

        ELEMENT_DATA.length = 0;
    for(var i=0; i<splitted.length;i++) {
        var psnr = "33";

        ELEMENT_DATA.push({no : i+1, resizedStableServerImageURL: splitted[i], resizedDevServerImageURL: splitted[i], resizedResultImageURL: splitted[i], psnr: psnr });

      }
    }
  }


  initData() {
        this.dataSource = new MatTableDataSource<Element>(INIT_DATA);
      }
}


export interface Element {
  no: number;
  resizedStableServerImageURL: string;
  resizedDevServerImageURL: string;
  resizedResultImageURL: string;
  psnr: string;
}

const ELEMENT_DATA: Element[] = [

];
const INIT_DATA: Element[] = [
    {no : 1, resizedStableServerImageURL: "http://www.hondahookup.com/images/100x100.jpg", resizedDevServerImageURL: "http://www.hondahookup.com/images/100x100.jpg", resizedResultImageURL: "http://www.hondahookup.com/images/100x100.jpg", psnr: "0" }
];
