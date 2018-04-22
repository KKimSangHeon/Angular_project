import {NgModule} from '@angular/core';
import {VerifyMetadataComponent} from './components/verifymetadata.component';
import {VerifyMetadataService} from './service/verifymetadata.service';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [SharedModule,CommonModule,BrowserModule],
  providers: [VerifyMetadataService],
  declarations: [VerifyMetadataComponent],
  exports: [VerifyMetadataComponent],

})
export class VerifyMetadataModule {
}
