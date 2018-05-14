import {NgModule} from '@angular/core';


import {VerifyImageListComponent} from './components/verifyimagelist.component';

import {VerifyImageListService} from './service/verifyimagelist.service';
import {SharedModule} from '../shared/shared.module';
import {SharedService} from '../shared/shared.service';

@NgModule({
  imports: [SharedModule],
  providers: [VerifyImageListService,SharedService],
  declarations: [VerifyImageListComponent],
  exports: [VerifyImageListComponent],

})
export class VerifyImageListModule {
}
