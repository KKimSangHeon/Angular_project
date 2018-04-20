import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';

import {ImageVerifyComponent} from './imageverify/components/imageverify.component';
import {MetadataVerifyComponent} from './metadataverify/components/metadataverify.component';


const appRoutes: Routes = [
  {
  path: '',
  children: [
    {
      path: '',
      redirectTo: 'imageverify',
      pathMatch: 'full',
    },
    {
      path: 'imageverify',
      component: ImageVerifyComponent,
      data: {
        nav: {
          name: 'ImageVerify',
          comment: '이미지 검증',
          icon: 'dashboard',
        }
      }
    },
    {
      path: 'metadataverify',
      component: MetadataVerifyComponent,
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
