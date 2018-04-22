import {Component, Inject, OnInit, OnDestroy,AfterViewInit,ChangeDetectorRef} from '@angular/core';
import {Router} from '@angular/router';
import {VerifyImageService} from '../service/verifyimage.service';




@Component({
  selector: 'app-verifyimage',
  templateUrl: './verifyimage.component.html',
  styleUrls: ['./verifyimage.component.scss'],
})
export class VerifyImageComponent  {

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
    PSNRURL:string;

    constructor(private verifyImageService: VerifyImageService,
                private cdr: ChangeDetectorRef) {
}


ngOnInit() {
this.cdr.detectChanges();

}
    onClickClearButton() {
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

      /*
          this.resizedStableServerImageURL = this.serverURL+ '?fileAddress=' +this.imageURL+'&method=delivery&server=stable&size=200x200&transparency='+this.transparency;
          this.resizedDevServerImageURL = this.serverURL+ '?fileAddress=' +this.imageURL+'&method=delivery&server=dev&size=200x200&transparency='+this.transparency;
          this.resizedResultImageURL = this.serverURL+ '?fileAddress=' +this.imageURL+'&method=verify&size=200x200&transparency='+this.transparency;

          this.originalStableServerImageURL = this.serverURL+ '?fileAddress=' +this.imageURL+'&method=delivery&server=stable&transparency='+this.transparency;
          this.originalDevServerImageURL = this.serverURL+ '?fileAddress=' +this.imageURL+'&method=delivery&server=dev&transparency='+this.transparency;
          this.originalVerifyImageURL = this.serverURL+ '?fileAddress=' +this.imageURL+'&method=verify&resType=image&transparency='+this.transparency;

          this.PSNRURL = this.serverURL+ '?fileAddress=' +this.imageURL+'&method=verify&resType=figure';

      */
      this.resizedStableServerImageURL = this.imageURL;
      this.resizedDevServerImageURL = this.imageURL;
      this.resizedResultImageURL = this.imageURL;

      this.originalStableServerImageURL = this.resizedStableServerImageURL;
      this.originalDevServerImageURL = this.resizedStableServerImageURL;
      this.originalVerifyImageURL = this.resizedStableServerImageURL;

    }
}
