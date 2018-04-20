import {NgModule} from '@angular/core';


import {ImageVerifyComponent} from './components/imageverify.component';

import {ImageVerifyService} from './service/imageverify.service';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [SharedModule],
  providers: [ImageVerifyService],
  declarations: [ImageVerifyComponent],
  exports: [ImageVerifyComponent],

})
export class ImageVerifyModule {
}
