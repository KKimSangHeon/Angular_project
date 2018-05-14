import {NgModule} from '@angular/core';


import {VerifyImageComponent} from './components/verifyimage.component';

import {VerifyImageService} from './service/verifyimage.service';
import {SharedModule} from '../shared/shared.module';
import {SharedService} from '../shared/shared.service';

@NgModule({
  imports: [SharedModule],
  providers: [VerifyImageService,SharedService],
  declarations: [VerifyImageComponent],
  exports: [VerifyImageComponent],

})
export class VerifyImageModule {
}
