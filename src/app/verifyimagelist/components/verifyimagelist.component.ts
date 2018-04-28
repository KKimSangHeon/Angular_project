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
    serverURL:string = '10.22222222222222.com';

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

      /*
          this.resizedStableServerImageURL = this.serverURL+ '?fileAddress=' +this.imageURL+'&method=delivery&server=stable&size=200x200&transparency='+this.transparency;
          this.resizedDevServerImageURL = this.serverURL+ '?fileAddress=' +this.imageURL+'&method=delivery&server=dev&size=200x200&transparency='+this.transparency;
          this.resizedResultImageURL = this.serverURL+ '?fileAddress=' +this.imageURL+'&method=verify&size=200x200&transparency='+this.transparency;

          this.originalStableServerImageURL = this.serverURL+ '?fileAddress=' +this.imageURL+'&method=delivery&server=stable&transparency='+this.transparency;
          this.originalDevServerImageURL = this.serverURL+ '?fileAddress=' +this.imageURL+'&method=delivery&server=dev&transparency='+this.transparency;
          this.originalVerifyImageURL = this.serverURL+ '?fileAddress=' +this.imageURL+'&method=verify&resType=image&transparency='+this.transparency;

          this.PSNRURL = this.serverURL+ '?fileAddress=' +this.imageURL+'&method=verify&resType=figure';

      */
      var counter = 1;
      RESULT_ELEMENT_DATA.length = 0;

      for(var i =0 ; i<ELEMENT_DATA.length;i++) {
        let resizedStableServerImageURL = ELEMENT_DATA[i]['resizedStableServerImageURL'];
        let resizedDevServerImageURL = ELEMENT_DATA[i]['resizedDevServerImageURL'];
        let resizedResultImageURL = ELEMENT_DATA[i]['resizedResultImageURL'];

        let originalStableServerImageURL = ELEMENT_DATA[i]['originalStableServerImageURL'];
        let originalResultImageURL = ELEMENT_DATA[i]['originalResultImageURL'];
        let originalDevServerImageURL =ELEMENT_DATA[i]['originalDevServerImageURL'];


          this.verifyImageListService.getPSNR(ELEMENT_DATA[i]['psnrURL']).subscribe(
          res => {
              let psnr = res['_body'];

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

              console.log(err);
          }
        );


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
                        psnrURL:psnrURL});
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
