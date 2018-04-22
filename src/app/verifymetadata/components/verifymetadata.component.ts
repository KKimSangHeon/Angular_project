import {Component, Inject, OnInit, OnDestroy,ChangeDetectorRef,AfterViewInit} from '@angular/core';
import {Router} from '@angular/router';
import {VerifyMetadataService} from '../service/verifymetadata.service';

@Component({
  selector: 'app-verifymetadata',
  templateUrl: './verifymetadata.component.html',
  styleUrls: ['./verifymetadata.component.scss'],
})
export class VerifyMetadataComponent implements OnInit  {

serverURL:string = '10.22222222222222.com';
defaultImageURL:string ='http://duncanlock.net/images/posts/better-figures-images-plugin-for-pelican/dummy-200x200.png';
resizedCompareMetadataImageURL:string = this.defaultImageURL;

transparency = 0;
metadataURL:string ;
originalDevServerMetadataURL:string;
originalStableServerMetadataURL:string;
originalDevServerImageURL:string;

originalCompareMetadataImageURL:string = '';
compareFigureURL:string='';
compareFigure:string='0';

devMetadata:string= '';
stableMetadata:string = '';

constructor(private verifyMetadataService: VerifyMetadataService,
            private cdr: ChangeDetectorRef) {
}

ngOnInit() {
      this.cdr.detectChanges();

}


onClickClearButton() {
  this.metadataURL = '';
  this.resizedCompareMetadataImageURL = this.defaultImageURL;
  this.stableMetadata = '';
  this.devMetadata ='';
  this.compareFigure='0';

  this.cdr.detectChanges();
}

onClickVerifyButton() {

/*


  this.resizedCompareMetadataImageURL = this.serverURL+ '?fileAddress=' +this.metadataURL+'&method=verify&size=200x200&resType=image';
  this.originalCompareMetadataImageURL = this.serverURL+ '?fileAddress=' +this.metadataURL+'&method=verify&resType=image';
  this.compareFigureURL = this.serverURL+ '?fileAddress=' +this.metadataURL+'&method=verify&resType=figure';
  this.originalDevServerMetadataURL =  this.serverURL+ '?fileAddress=' +this.metadataURL+'&method=delivery&server=dev';
  this.originalStableServerMetadataURL =  this.serverURL+ '?fileAddress=' +this.metadataURL+'&method=delivery&server=stable';

주석해제하고 아래 5줄 지우기
*/

    this.originalCompareMetadataImageURL = this.metadataURL;
    this.resizedCompareMetadataImageURL = this.metadataURL;
    this.originalDevServerMetadataURL = 'http://validate.jsontest.com/?json=%7B%22key%22:%22value%22';
    this.originalStableServerMetadataURL =  'http://validate.jsontest.com/?json=%7B%22key%22:%22value%22%7D';
    this.compareFigureURL = 'http://validate.jsontest.com/?json=%7B%22key%22:%22value%22%7D';



    this.verifyMetadataService.getData(this.originalDevServerMetadataURL).subscribe(
    res => {
        console.log(res);
            this.devMetadata = res['_body'];
            this.cdr.detectChanges();
      },
    err => {
        this.devMetadata ='get metadata err';
        console.log(err);
    }
  );

  this.verifyMetadataService.getData(this.originalStableServerMetadataURL).subscribe(
  res => {
      console.log(res);
      this.stableMetadata = res['_body'];
      this.cdr.detectChanges();
    },
  err => {
      this.stableMetadata ='get metadata err';
      console.log(err);
  }
);

this.verifyMetadataService.getData(this.compareFigureURL).subscribe(
  res => {
      console.log(res);
      this.compareFigure = res['_body'];
      this.cdr.detectChanges();
    },
  err => {
      this.compareFigure ='get compareFigure err';
      console.log(err);
  }
);


  }
}
