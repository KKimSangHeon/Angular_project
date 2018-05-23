import {Component, Inject, OnInit, OnDestroy,AfterViewInit,ChangeDetectorRef,Input} from '@angular/core';
import {Router} from '@angular/router';
import {VerifyImageService} from '../service/verifyimage.service';
import { MatTableDataSource} from '@angular/material';
import {SharedService} from '../../shared/shared.service';

@Component({
  selector: 'app-verifyimage',
  templateUrl: './verifyimage.component.html',
  styleUrls: ['./verifyimage.component.scss'],
})
export class VerifyImageComponent  implements OnInit {

    displayedColumns = ['no', 'resizedStableServerImageURL', 'resizedDevServerImageURL', 'resizedResultImageURL','psnr'];
    @Input() dataSource = new MatTableDataSource<Element>(RESULT_ELEMENT_DATA);
    transparent = 1;
    imageURL:string = '';
    serverURL:string = 'http://10.106.151.156/verify';

    errorImageURL:string = 'https://cdn.browshot.com/static/images/not-found.png';

    resizedStableServerImageURL:string;
    resizedDevServerImageURL:string;
    resizedResultImageURL:string;
    originalStableServerImageURL:string;
    originalDevServerImageURL:string;
    originalResultImageURL:string;
    counter = 1;
    psnr:string = '0';
    resize:string ='modify=resize&width=200&height=200';
    PSNRURL:string = '';
    color:string = "5";


    constructor(private verifyImageService: VerifyImageService,
                private sharedService: SharedService,
                private cdr: ChangeDetectorRef) {
}


ngOnInit() {
  this.initData();
//  this.cdr.detectChanges();

}

onClickClearButton() {
    this.initData();

}

insertData() {
    RESULT_ELEMENT_DATA.length = 0;
  RESULT_ELEMENT_DATA.push({no : 1,
                              resizedStableServerImageURL: this.resizedStableServerImageURL,
                              resizedDevServerImageURL: this.resizedDevServerImageURL,
                              resizedResultImageURL: this.resizedResultImageURL,
                              originalStableServerImageURL: this.originalStableServerImageURL,
                              originalDevServerImageURL: this.originalDevServerImageURL,
                              originalResultImageURL: this.originalResultImageURL,
                              psnr: this.psnr ,
                              psnrURL:''});
this.dataSource = new MatTableDataSource<Element>(RESULT_ELEMENT_DATA);
}

initData() {
  this.dataSource = new MatTableDataSource<Element>(INIT_DATA);
}

onClickVerifyButton() {

    RESULT_ELEMENT_DATA.length = 0;

    this.PSNRURL = this.serverURL+ '?src=&amp;' +this.imageURL+'&amp;&action=verify&resType=figure';
    this.resizedStableServerImageURL = this.serverURL+ '?src=&amp;' +this.imageURL+'&amp;&action=delivery&server=stable&'+this.resize;
    this.resizedDevServerImageURL = this.serverURL+ '?src=&amp;' +this.imageURL+'&amp;&action=delivery&server=dev&'+this.resize;
    this.resizedResultImageURL = this.serverURL+ '?src=&amp;' +this.imageURL+'&amp;&action=verify&'+this.resize+'&transparent='+this.transparent+'&diffColor='+this.color+'&';

    this.originalStableServerImageURL = this.serverURL+ '?src=&amp;' +this.imageURL+'&amp;&action=delivery&server=stable';
    this.originalDevServerImageURL = this.serverURL+ '?src=&amp;' +this.imageURL+'&amp;&action=delivery&server=dev';
    this.originalResultImageURL = this.serverURL+ '?src=&amp;' +this.imageURL+'&amp;&action=verify&resType=image&transparent='+this.transparent+'&diffColor='+this.color+'&';



    this.verifyImageService.getPSNR(this.PSNRURL).subscribe(
    res => {
            if(res['status'] == 'fail') {
                    this.resizedResultImageURL = this.errorImageURL;
                    this.psnr =  this.sharedService.decodeErrorCode(res['error_code']);

            } else {
                    this.psnr =  this.sharedService.decodeResultCode(res);
          }
                    this.insertData();
      },
    err => {
        this.psnr ='error';
        this.insertData();
        console.log(err);
    }
  );

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
