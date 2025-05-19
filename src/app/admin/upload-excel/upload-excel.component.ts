import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../../shared/service.service';
import { NzProgressModule } from 'ng-zorro-antd/progress';


@Component({
  selector: 'app-upload-excel',
  standalone: false,
  templateUrl: './upload-excel.component.html',
  styleUrl: './upload-excel.component.css'
})
export class UploadExcelComponent {
  selectedFile: File | undefined;

  fileValidated: boolean = false;
  percent = 0;
  showProgress = false;


  constructor(private router: Router, private service: ServiceService) {

  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  onValidate(form: NgForm) {
    if (form.valid && this.selectedFile) {
      this.showProgress = true;
      let intervalId = setInterval(() => {
        if (this.percent === 100) {
          // this.percent = 0;
          this.fileValidated = true;
          clearInterval(intervalId);
        } else {
          this.percent += 10;
        }
      }, 1000)
      this.service.validateExcel(this.selectedFile).subscribe(data => {
        this.service.validUserCount = data.validUserCount;
        this.service.invalidUserCount = data.invalidUserCount;
      })
    }
  }

  showPreview() {
    this.service.selectedIndex = 1;
  }
}
