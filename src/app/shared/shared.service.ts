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
  else if(code =='-20') {
  return 'CURL INIT ERROR';
}
else if(code =='-10') {
 return 'QUERY ERROR';
}
else if(code =='-11') {
  return 'PARAM LIST ERROR';
}
else if(code =='-12') {
  return 'ADDRESS ERROR';
}
else if(code =='-13') {
  return 'COPY ERROR';
}
else if(code =='-14') {
  return 'TOKENIZER ERROR';
}
else if(code =='-21') {
      return 'CURLOPT URL ERROR';
}
else if(code =='-22') {
      return 'CURLOPT HEADERFUNCTION ERROR';
}
else if(code =='-23') {
    return 'CURLOPT NOPROGRESS ERROR';
}
else if(code =='-24') {
  return 'CURLOPT WRITEHEADER ERROR';
}
else if(code =='-25') {
return 'CURLOPT WRITEFUNCTION ERROR';
}
else if(code =='-26') {
      return 'CURLOPT WRITEDATA ERROR';
}
else if(code =='-27') {
      return 'CURLOPT RESOLVE ERROR';
}
else if(code =='-30') {
      return 'ACTION VALUE ERROR';
}
else if(code =='-31') {
      return 'RESULT DATA ERROR';
}
else if(code =='-32') {
      return 'DELIVERY ERROR';
}
else if(code =='-40') {
      return 'RESIZE RESULT DATA ERROR';
}
else if(code =='-41') {
      return 'RESIZE VALUE ERROR';
}
else if(code =='-42') {
      return 'NOT FOUND WIDTH';
}
else if(code =='-43') {
      return 'NOT FOUND HEIGH';
}
else if(code =='-44') {
      return 'NOT FOUND X';
}
else if(code =='-45') {
      return 'NOT FOUND Y';
}
else if(code =='-50') {
      return 'SET BODY DATA ERROR';
}
else if(code =='-51') {
      return 'EMPTY BODY DATA';
}
else if(code =='-60') {
      return 'DIFF DATA TYPE';
}
else if(code =='-61') {
      return 'DIFF COLORSPACE';
}
else if(code =='-62') {
      return 'DIFF NUM OF PIXEL';
}
else if(code =='-63') {
      return 'IMAGE ERROR';
}
else if(code =='-64') {
      return 'DIFF GIF FRAMES';
}
else if(code =='-70') {
      return 'SET DATA ERROR';
}
else if(code =='-80') {
      return 'JSON PARSING ERROR';
}
else if(code =='-81') {
      return 'FIGURE INIT';
}
else if(code =='-82') {
      return 'TEXT TO IMAGE ERROR';
}
else if(code =='-83') {
      return 'EMPTY DATA';
}
else if(code =='-90') {
      return 'C TOKENIZER ERROR';
}
else if(code =='-101') {
      return 'NOT FOUND DQ ';
}
else if(code =='-102') {
      return 'UNKNOWN_FLAG';
}


    decodeResultCode(code:string): string {
        if ( code == '99999' ){
          return 'EQUAL DATA';
        }
        return code;
  }
}
