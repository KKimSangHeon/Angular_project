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

     @Input() dataSource = new MatTableDataSource<Element>(RESULT_ELEMENT_DATA);
    filsText:string;
    transparency = 3;
    imageURL:string = '';
    serverURL:string = 'http://10.106.151.156/verify';
        resize:string ='modify=resize&width=100&height=100';

    defaultImageURL:string ='http://duncanlock.net/images/posts/better-figures-images-plugin-for-pelican/dummy-200x200.png';

    constructor(private verifyImageListService: VerifyImageListService,
                private cdr: ChangeDetectorRef) {
}


ngOnInit() {
  this.initData();

}
onClickClearButton() {

      this.initData();



}

onClickVerifyButton() {
    this.initData();


      var counter = 1;
      RESULT_ELEMENT_DATA.length = 0;

      for(var i =0 ; i<ELEMENT_DATA.length;i++) {
            let resizedStableServerImageURL = ELEMENT_DATA[i]['resizedStableServerImageURL'];
            let resizedDevServerImageURL = ELEMENT_DATA[i]['resizedDevServerImageURL'];
            let resizedResultImageURL = ELEMENT_DATA[i]['resizedResultImageURL'];

            let originalStableServerImageURL = ELEMENT_DATA[i]['originalStableServerImageURL'];
            let originalResultImageURL = ELEMENT_DATA[i]['originalResultImageURL'];
            let originalDevServerImageURL =ELEMENT_DATA[i]['originalDevServerImageURL'];
            let PSNRURL=ELEMENT_DATA[i]['psnrURL'];
            let psnr;
            let originalVerifyImageURL;

            PSNRURL = this.serverURL+ '?src=&amp;' +PSNRURL+'&amp;&method=verify&resType=figure';
            resizedStableServerImageURL = this.serverURL+ '?src=&amp;' +resizedStableServerImageURL+'&amp;&action=delivery&server=stable&size=200x200&transparency='+this.transparency;
            resizedDevServerImageURL = this.serverURL+ '?src=&amp;' +resizedDevServerImageURL+'&amp;&action=delivery&server=dev&size=200x200&transparency='+this.transparency;
            resizedResultImageURL = this.serverURL+ '?src=&amp;' +resizedResultImageURL+'&amp;&action=verify&size=200x200&transparency='+this.transparency;

            originalStableServerImageURL = this.serverURL+ '?src=&amp;' +originalStableServerImageURL+'&amp;&action=delivery&server=stable&transparency='+this.transparency;
            originalDevServerImageURL = this.serverURL+ '?src=&amp;' +originalResultImageURL+'&amp;&action=delivery&server=dev&transparency='+this.transparency;
            originalVerifyImageURL = this.serverURL+ '?src=&amp;' +originalDevServerImageURL+'&amp;&action=verify&resType=image&transparency='+this.transparency;


            this.verifyImageListService.getPSNR(ELEMENT_DATA[i]['psnrURL']).subscribe(
            res => {
                psnr = res['_body'];
            },
            err => {
                psnr ='error';
                console.log(err);
            });

            RESULT_ELEMENT_DATA.push({no : counter++,
                                        resizedStableServerImageURL: resizedStableServerImageURL,
                                        resizedDevServerImageURL: resizedDevServerImageURL,
                                        resizedResultImageURL: resizedResultImageURL,
                                        originalStableServerImageURL: originalStableServerImageURL,
                                        originalDevServerImageURL: originalDevServerImageURL,
                                        originalResultImageURL: originalResultImageURL,
                                        psnr: psnr ,
                                        psnrURL:''});

            this.dataSource = new MatTableDataSource<Element>(RESULT_ELEMENT_DATA);
          }
}


fileUpload(event) {

    var reader = new FileReader();
    reader.readAsText(event.srcElement.files[0]);
    reader.onload = function () {
    var splitted = reader.result.split("\n");

        ELEMENT_DATA.length = 0;
    for(var i=0; i<splitted.length;i++) {
        var psnr = "33";
          var psnrURL = 'http://validate.jsontest.com/?json=%7B%22key%22:%22value%22%7D';
        ELEMENT_DATA.push({no : i+1,
                        resizedStableServerImageURL: splitted[i],
                        resizedDevServerImageURL: splitted[i],
                        resizedResultImageURL: splitted[i],
                        originalStableServerImageURL: splitted[i],
                        originalDevServerImageURL: splitted[i],
                        originalResultImageURL:splitted[i],
                        psnr: psnr ,
                        psnrURL:splitted[i]});
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
  originalStableServerImageURL: string;
  originalDevServerImageURL: string;
  originalResultImageURL: string;
  psnrURL:string;
  psnr: any;
}

const ELEMENT_DATA: Element[] = [];

const RESULT_ELEMENT_DATA: Element[] = [];

const INIT_DATA: Element[] = [
    {no : 1,
    resizedStableServerImageURL: "http://www.hondahookup.com/images/100x100.jpg",
    resizedDevServerImageURL: "http://www.hondahookup.com/images/100x100.jpg",
    resizedResultImageURL: "http://www.hondahookup.com/images/100x100.jpg",
    originalStableServerImageURL: "http://www.hondahookup.com/images/100x100.jpg",
    originalDevServerImageURL: "http://www.hondahookup.com/images/100x100.jpg",
    originalResultImageURL: "http://www.hondahookup.com/images/100x100.jpg",

    psnrURL:"aaa",psnr: "0" }
];
