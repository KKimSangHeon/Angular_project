import {NgModule} from '@angular/core';
import {VerifyMetadataComponent} from './components/verifymetadata.component';
import {VerifyMetadataService} from './service/verifymetadata.service';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [SharedModule],
  providers: [VerifyMetadataService],
  declarations: [VerifyMetadataComponent],
  exports: [VerifyMetadataComponent],

})
export class VerifyMetadataModule {
}
