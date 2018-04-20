import {NgModule} from '@angular/core';


import {VerifyImageComponent} from './components/verifyimage.component';

import {VerifyImageService} from './service/verifyimage.service';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [SharedModule],
  providers: [VerifyImageService],
  declarations: [VerifyImageComponent],
  exports: [VerifyImageComponent],

})
export class VerifyImageModule {
}
