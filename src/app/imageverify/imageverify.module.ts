import {NgModule} from '@angular/core';


import {ImageVerifyComponent} from './components/imageverify.component';

import {ImageVerifyService} from './service/imageverify.service';

@NgModule({

  providers: [ImageVerifyService],
  declarations: [ImageVerifyComponent],
  exports: [ImageVerifyComponent],

})
export class ImageVerifyModule {
}
