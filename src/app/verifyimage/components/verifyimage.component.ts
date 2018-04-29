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
    serverURL:string = 'http://10.106.151.156/verify';





    defaultImageURL:string ='http://duncanlock.net/images/posts/better-figures-images-plugin-for-pelican/dummy-200x200.png';

    resizedStableServerImageURL:string = this.defaultImageURL;
    resizedDevServerImageURL:string = this.defaultImageURL;
    resizedResultImageURL:string = this.defaultImageURL;
    originalStableServerImageURL:string;
    originalDevServerImageURL:string;
    originalVerifyImageURL:string;
    PSNRURL:string = '';
    psnr:string = '0';
    resize:string ='modify=resize&width=200&height=200';
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



          this.resizedStableServerImageURL = this.serverURL+ '?src=&amp;' +this.imageURL+'&amp;&action=delivery&server=stable&'+this.resize+'&transparency='+this.transparency;
          this.resizedDevServerImageURL = this.serverURL+ '?src=&amp;' +this.imageURL+'&amp;&action=delivery&server=dev&'+this.resize+'&transparency='+this.transparency;
          this.resizedResultImageURL = this.serverURL+ '?src=&amp;' +this.imageURL+'&amp;&action=verify&'+this.resize+'&transparency='+this.transparency;

          this.originalStableServerImageURL = this.serverURL+ '?src=&amp;' +this.imageURL+'&amp;&action=delivery&server=stable&transparency='+this.transparency;
          this.originalDevServerImageURL = this.serverURL+ '?src=&amp;' +this.imageURL+'&amp;&action=delivery&server=dev&transparency='+this.transparency;
          this.originalVerifyImageURL = this.serverURL+ '?src=&amp;' +this.imageURL+'&amp;&action=verify&resType=image&transparency='+this.transparency;

          this.PSNRURL = this.serverURL+ '?src=&amp;' +this.imageURL+'&amp;&action=verify&resType=figure';

          console.log(this.PSNRURL);

      this.verifyImageService.getPSNR(this.PSNRURL).subscribe(
      res => {
          console.log(res);
              this.psnr = res['_body'];

        },
      err => {
          this.psnr ='error';
          console.log(err);
      }
    );

    }
}
