import {NgModule} from '@angular/core';


import {VerifyImageListComponent} from './components/verifyimagelist.component';

import {VerifyImageListService} from './service/verifyimagelist.service';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [SharedModule],
  providers: [VerifyImageListService],
  declarations: [VerifyImageListComponent],
  exports: [VerifyImageListComponent],

})
export class VerifyImageListModule {
}
