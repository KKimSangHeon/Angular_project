import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';

import {VerifyImageComponent} from './verifyimage/components/verifyimage.component';
import {VerifyMetadataComponent} from './verifymetadata/components/verifymetadata.component';


const appRoutes: Routes = [
  {
  path: '',
  children: [
    {
      path: '',
      redirectTo: 'verifyimage',
      pathMatch: 'full',
    },
    {
      path: 'verifyimage',
      component: VerifyImageComponent,
      data: {
        nav: {
          name: 'VerifyImage',
          comment: '이미지 검증',
          icon: 'dashboard',
        }
      }
    },
    {
      path: 'verifymetadata',
      component: VerifyMetadataComponent,
      data: {
        nav: {
          name: 'metadataVerify',
          comment: '메타데이터 검증',
          icon: 'dashboard',
        }
      }
    },
  ]
  }

];

export const Route: ModuleWithProviders = RouterModule.forRoot(appRoutes);
