import {Component, Inject, OnInit, OnDestroy,ChangeDetectorRef,AfterViewInit,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Router} from '@angular/router';
import {VerifyMetadataService} from '../service/verifymetadata.service';
import * as _ from 'lodash';

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

metadata1Data = [];
items:Object[] = [];
metadataList = [];

constructor(private verifyMetadataService: VerifyMetadataService,
            private cdr: ChangeDetectorRef) {
}

ngOnInit() {
      this.cdr.detectChanges();

      this.metadataList.push(
        {
        "key":'qqqq'
        ,"metadata1":'aaaaaaaaaaaaaaaaaaaa'
        ,"metadata2": 'bbbbbbbbbbbbbbbbbbbb'
        ,"case" : '1'
        }
      )
        this.metadataList.push(
          {
          "key":'qqqq'
          ,"metadata1":'aaaaaaaaaaaaaaaaaaaa'
          ,"metadata2": 'bbbbbbbbbbbbbbbbbbbb'
          ,"case" : '1'
          }
        );

        this.metadataList.push(
          {
          "key":'qqqq'

          ,"metadata2": 'bbbbbbbbbbbbbbbbbbbb'
          ,"case" : '3'
          }
        );
        this.metadataList.push(
          {
          "key":'qqqq'

          ,"metadata2": 'bbbbbbbbbbbbbbbbbbbb'
          ,"case" : '3'
          }
        );
        this.metadataList.push(
          {
          "key":'qqqq'
          ,"metadata1":'aaaaaaaaaaaaaaaaaaaa'
          ,"metadata2": 'bbbbbbbbbbbbbbbbbbbb'
          ,"case" : '2'
          }
        );
        this.metadataList.push(
          {
          "key":'qqqq'
          ,"metadata1":'aaaaaaaaaaaaaaaaaaaa'

          ,"case" : '4'
          }
        );





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





      this.verifyMetadataService.getData('https://crix-api-endpoint.upbit.com/v1/crix/candles/minutes/1?code=CRIX.UPBIT.KRW-ADA').subscribe(
       res => {
           //console.log(res);
               this.devMetadata = res;
               this.cdr.detectChanges();


///////////////////////////////////////////////////////// 2번째 메타데이터 수신
               this.verifyMetadataService.getData('https://crix-api-endpoint.upbit.com/v1/crix/candles/minutes/1?code=CRIX.UPBIT.KRW-XRP').subscribe(
                res => {
                    //console.log(res);
                        this.stableMetadata = res;
                        this.cdr.detectChanges();


                        console.log(this.devMetadata);
                              console.log(this.stableMetadata);
                         console.log(this.difference(this.devMetadata,this.stableMetadata));
                         console.log(this.equals(this.devMetadata,this.stableMetadata));
                         console.log(this.difference(this.stableMetadata,this.devMetadata));



                  },
                err => {
                    this.devMetadata ='get metadata err';
                    console.log(err);
                }
               );
/////////////////////////////////////////////////////////
         },
       err => {
           this.devMetadata ='get metadata err';
           console.log(err);
       }
      );





  }


difference(object, base) {
  	function changes(object, base) {
  		return _.transform(object, function(result, value, key) {
  			if (!_.isEqual(value, base[key])) {
  				result[key] = (_.isObject(value) && _.isObject(base[key])) ? changes(value, base[key]) : value;
  			}
  		});
  	}
  	return changes(object, base);
}

equals(object, base) {
    function changes(object, base) {
      return _.transform(object, function(result, value, key) {
        if (_.isEqual(value, base[key])) {
          result[key] = (_.isObject(value) && _.isObject(base[key])) ? changes(value, base[key]) : value;
        }
      });
    }
    return changes(object, base);
}

}
