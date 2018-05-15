import {Component, Inject, OnInit, OnDestroy,AfterViewInit,ChangeDetectorRef,Input} from '@angular/core';
import {Router} from '@angular/router';
import {VerifyImageListService} from '../service/verifyimagelist.service';
import { MatTableDataSource} from '@angular/material';
import {SharedService} from '../../shared/shared.service';


@Component({
  selector: 'app-verifyimagelist',
  templateUrl: './verifyimagelist.component.html',
  styleUrls: ['./verifyimagelist.component.scss'],
})
export class VerifyImageListComponent implements OnInit {

    displayedColumns = ['no', 'resizedStableServerImageURL', 'resizedDevServerImageURL', 'resizedResultImageURL','psnr'];
    @Input() dataSource = new MatTableDataSource<Element>(RESULT_ELEMENT_DATA);
    filsText:string;
    transparent = 3;
    imageURL:string = '';
    serverURL:string = 'http://10.106.151.156/verify';
    resize:string ='modify=resize&width=100&height=100';
    errorImageURL:string = 'https://cdn.browshot.com/static/images/not-found.png';


    constructor(private verifyImageListService: VerifyImageListService,
                private cdr: ChangeDetectorRef,
              private sharedService: SharedService) {
}

ngOnInit() {
  this.initData();
}
onClickClearButton() {
      this.initData();
}

onClickVerifyButton() {
      var counter = 1;
      RESULT_ELEMENT_DATA.length = 0;

      for(var i =0 ; i<ELEMENT_DATA.length;i++) {
            let url = ELEMENT_DATA[i]['originalResultImageURL'];

            let resizedStableServerImageURL = ELEMENT_DATA[i]['resizedStableServerImageURL'];
            let resizedDevServerImageURL = ELEMENT_DATA[i]['resizedDevServerImageURL'];
            let resizedResultImageURL = ELEMENT_DATA[i]['resizedResultImageURL'];

            let originalStableServerImageURL ;
            let originalResultImageURL;
            let originalDevServerImageURL;
            let PSNRURL;
            let psnr;


            PSNRURL = this.serverURL+ '?src=&amp;' +url+'&amp;&action=verify&resType=figure';
            resizedStableServerImageURL = this.serverURL+ '?src=&amp;' +url+'&amp;&action=delivery&server=stable&'+this.resize;
            resizedDevServerImageURL = this.serverURL+ '?src=&amp;' +url+'&amp;&action=delivery&server=dev&'+this.resize;
            resizedResultImageURL = this.serverURL+ '?src=&amp;' +url+'&amp;&action=verify&'+this.resize+'&transparent='+this.transparent;

            originalStableServerImageURL = this.serverURL+ '?src=&amp;' +url+'&amp;&action=delivery&server=stable';
            originalDevServerImageURL = this.serverURL+ '?src=&amp;' +url+'&amp;&action=delivery&server=dev';
            originalResultImageURL = this.serverURL+ '?src=&amp;' +url+'&amp;&action=verify&resType=image&transparent='+this.transparent;

            this.verifyImageListService.getPSNR(PSNRURL).subscribe(
            res => {


            if(res['status'] == 'fail') {
                    psnr =  this.sharedService.decodeErrorCode(res['error_code']);

                    resizedResultImageURL = this.errorImageURL;
            } else {
                    psnr =  this.sharedService.decodeResultCode(res);
            }

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
            },
            err => {
                psnr ='error';
                console.log(err);
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
            });

          }
                  ELEMENT_DATA.length = 0;
                  RESULT_ELEMENT_DATA.length =0;
}

fileUpload(event) {

    var reader = new FileReader();
    reader.readAsText(event.srcElement.files[0]);
    reader.onload = function () {
    var splitted = reader.result.split("\n");

        ELEMENT_DATA.length = 0;
    for(var i=0; i<splitted.length;i++) {
        var psnr = "0";

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

const defaultURL = "http://www.hondahookup.com/images/100x100.jpg";

const INIT_DATA: Element[] = [
    {no : 1,
    resizedStableServerImageURL: defaultURL,
    resizedDevServerImageURL: defaultURL,
    resizedResultImageURL: defaultURL,
    originalStableServerImageURL: defaultURL,
    originalDevServerImageURL: defaultURL,
    originalResultImageURL: defaultURL,
    psnrURL:"",
    psnr: "0" }
];
