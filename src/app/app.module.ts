import 'hammerjs';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {Route} from './app.route';
import {SharedModule} from './shared/shared.module';
import {VerifyImageModule} from './verifyimage/verifyimage.module';
import {VerifyImageListModule} from './verifyimagelist/verifyimagelist.module';
import {VerifyMetadataModule} from './verifymetadata/verifymetadata.module';

@NgModule({

  imports: [
    BrowserModule,
    VerifyImageModule,
    VerifyImageListModule,
    VerifyMetadataModule,
    Route,
    SharedModule,
    BrowserAnimationsModule
  ],

  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
