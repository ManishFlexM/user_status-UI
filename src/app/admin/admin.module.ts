import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationResultComponent } from './validation-result/validation-result.component';
import { UploadResultComponent } from './upload-result/upload-result.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzProgressModule } from 'ng-zorro-antd/progress';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzTabsModule,
    NzCardModule,
    NzProgressModule
  ]
})
export class AdminModule { }
