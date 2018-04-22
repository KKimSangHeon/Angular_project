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
resizedResultImageURL:string = this.defaultImageURL;

transparency = 0;
metadataURL:string ;
originalDevServerMetadataURL:string;
originalStableServerMetadataURL:string;
originalDevServerImageURL:string;

originalCompareMetadataURL:string = '';
compareFigureURL:string='';
comparefigure:string='';

metadata1:string= 'aaaassssssssssssssss\n'
+'aaaaaaaaaaaaaaaaaaaaaaa\n'
+'aaaaaaaaaaaaaaaaaaaaaaa\n'
+'aaaaaaaaaaaaaaaaaaaaaaa\n'
+'aaaaaaaaaaaaaaaaaaaaaaa\n'
+'aaaaaaaaaaaaaaaaaaaaaaa\n'
+'aaaaaaaaaaaaaaaaaaaaaaa\n'
+'aaaaaaaaaaaaaaaaaaaaaaa\n';
metadata2:string = 'aaaassssssssssssssss\n'
+'aaaaaaaaaaaaaaaaaaaaaaa\n'
+'aaaaaaaaaaaaaaaaaaaaaaa\n'
+'aaaaaaaaaaaaaaaaaaaaaaa\n'
+'aaaaaaaaaaaaaaaaaaaaaaa\n'
+'aaaaaaaaaaaaaaaaaaaaaaa\n'
+'aaaaaaaaaaaaaaaaaaaaaaa\n'
+'aaaaaaaaaaaaaaaaaaaaaaa\n';

constructor(private verifyMetadataService: VerifyMetadataService,
            private cdr: ChangeDetectorRef) {
}

ngOnInit() {
this.cdr.detectChanges();

}


onClickClearButton() {
  this.metadataURL = '';
  this.resizedResultImageURL = this.defaultImageURL;

}

onClickVerifyButton() {

/*
  this.resizedResultImageURL = this.serverURL+ '?fileAddress=' +this.imageURL+'&method=verify&size=200x200&resType=image';
  this.originalCompareMetadataURL = this.serverURL+ '?fileAddress=' +this.imageURL+'&method=verify&resType=image';
  this.compareFigureURL = this.serverURL+ '?fileAddress=' +this.imageURL+'&method=verify&resType=figure';


*/

    this.originalCompareMetadataURL = this.metadataURL;
    this.resizedResultImageURL = this.metadataURL;
  }
}
