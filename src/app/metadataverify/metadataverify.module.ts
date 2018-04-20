import {NgModule} from '@angular/core';


import {MetadataVerifyComponent} from './components/metadataverify.component';

import {MetadataVerifyService} from './service/metadataverify.service';
import {SharedModule} from '../shared/shared.module';
@NgModule({
  imports: [SharedModule],
  providers: [MetadataVerifyService],
  declarations: [MetadataVerifyComponent],
  exports: [MetadataVerifyComponent],

})
export class MetadataVerifyModule {
}
