import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { UploadExcelComponent } from './admin/upload-excel/upload-excel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideNzI18n } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { UploadResultComponent } from './admin/upload-result/upload-result.component';
import { ValidationResultComponent } from './admin/validation-result/validation-result.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzProgressModule } from 'ng-zorro-antd/progress';

registerLocaleData(en);


@NgModule({
  declarations: [
    AppComponent,
    UploadExcelComponent,
    UploadResultComponent,
    ValidationResultComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NzModalModule,
    NzTabsModule,
    NzCardModule,
    NzProgressModule
  ],
  providers: [
    provideNzI18n(en_US),
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
