import {Component, Inject, OnInit, OnDestroy} from '@angular/core';
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


stableImageURL:string = 'http://duncanlock.net/images/posts/better-figures-images-plugin-for-pelican/dummy-200x200.png';
devImageURL:string = 'http://duncanlock.net/images/posts/better-figures-images-plugin-for-pelican/dummy-200x200.png';
resultImageURL:string = 'http://duncanlock.net/images/posts/better-figures-images-plugin-for-pelican/dummy-200x200.png';

onClickClearButton() {
  this.imageURL = '';
  this.transparency = 0;

}

onClickVerifyButton() {
  this.stableImageURL = this.imageURL;
  this.devImageURL = this.imageURL;
  this.resultImageURL = this.imageURL;
}



}
