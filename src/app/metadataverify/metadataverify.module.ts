import {NgModule} from '@angular/core';


import {MetadataVerifyComponent} from './components/metadataverify.component';

import {MetadataVerifyService} from './service/metadataverify.service';

@NgModule({

  providers: [MetadataVerifyService],
  declarations: [MetadataVerifyComponent],
  exports: [MetadataVerifyComponent],

})
export class MetadataVerifyModule {
}
