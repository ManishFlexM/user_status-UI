import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../shared/service.service';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validation-result',
  standalone: false,
  templateUrl: './validation-result.component.html',
  styleUrl: './validation-result.component.css'
})
export class ValidationResultComponent implements OnInit {
  validUsers: any = []
  invalidUsers: any = []

  constructor(private dataServcie: ServiceService, private modal: NzModalService, private router: Router) {
  }

  showConfirm(): void {
    this.modal.confirm({
      nzTitle: '<i>User status update</i>',
      nzContent: '<b style="color: red;">Some descriptions</b>',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.dataServcie.selectedIndex = 2,
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }



  ngOnInit() {
    this.dataServcie.validateExcel("File").subscribe(data => {
      this.validUsers = data.validUsers;
      this.invalidUsers = data.invalidUsers;
    })
  }

  onSubmit() {
    this.showConfirm();
  }
}
