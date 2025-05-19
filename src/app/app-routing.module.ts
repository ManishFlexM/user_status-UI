import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadExcelComponent } from './admin/upload-excel/upload-excel.component';
import { ValidationResultComponent } from './admin/validation-result/validation-result.component';
import { UploadResultComponent } from './admin/upload-result/upload-result.component';

const routes: Routes = [
  { path: '', component: UploadExcelComponent },
  { path: 'validate', component: ValidationResultComponent },
  { path: 'update', component: UploadResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
