
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {Route} from './app.route';

import {ImageVerifyModule} from './imageverify/imageverify.module';
import {MetadataVerifyModule} from './metadataverify/metadataverify.module';

@NgModule({

  imports: [
    BrowserModule,
    ImageVerifyModule,
    MetadataVerifyModule,
    Route,
    BrowserAnimationsModule
  ],

  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
