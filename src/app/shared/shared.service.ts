import {Injectable} from '@angular/core';



@Injectable()
export class SharedService {

  constructor() {
  }

    decodeErrorCode(code:string): string {
        if ( code == '-60' ){
          return 'DIFF DATA TYPE';
        } else if(code =='-61') {
          return 'DIFF COLORSPACE';
        } else if(code =='-62') {
          return 'DIFF NUM OF PIXEL';
        } else if(code =='-64') {
          return 'DIFF NUM OF FRAMES';
        } else if(code =='-83') {
          return 'EMPTY DATA';
        }
    }

    decodeResultCode(code:string): string {
        if ( code == '99999' ){
          return 'EQUAL DATA';
        }
        return code;
  }
}
