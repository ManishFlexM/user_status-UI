import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  validUser = [{
    name: "ABC",
    account: "129003",
    contact: "998822",
    status: "Active",
    kycStatus: "Submited"
  },
  {
    name: "ABC",
    account: "129003",
    contact: "998822",
    status: "Active",
    kycStatus: "Submited"
  },
  {
    name: "ABC",
    account: "129003",
    contact: "998822",
    status: "Active",
    kycStatus: "Submited"
  },
  {
    name: "ABC",
    account: "129003",
    contact: "998822",
    status: "Active",
    kycStatus: "Submited"
  },
  {
    name: "ABC",
    account: "129003",
    contact: "998822",
    status: "Active",
    kycStatus: "Submited"
  },
  {
    name: "ABC",
    account: "129003",
    contact: "998822",
    status: "Active",
    kycStatus: "Submited"
  },
  {
    name: "ABC",
    account: "129003",
    contact: "998822",
    status: "Active",
    kycStatus: "Submited"
  }
  ]
  invalidUser = [{
    name: "ABC",
    account: "129003",
    contact: "998822",
    status: "Active",
    kycStatus: "Submited"
  },
  {
    name: "ABC",
    account: "129003",
    contact: "998822",
    status: "Active",
    kycStatus: "Submited"
  },
  {
    name: "ABC",
    account: "129003",
    contact: "998822",
    status: "Active",
    kycStatus: "Submited"
  },
  {
    name: "ABC",
    account: "129003",
    contact: "998822",
    status: "Active",
    kycStatus: "Submited"
  },
  {
    name: "ABC",
    account: "129003",
    contact: "998822",
    status: "Active",
    kycStatus: "Submited"
  },
  {
    name: "ABC",
    account: "129003",
    contact: "998822",
    status: "Active",
    kycStatus: "Submited"
  },
  {
    name: "ABC",
    account: "129003",
    contact: "998822",
    status: "Active",
    kycStatus: "Submited"
  }
  ]

  validUserCount = undefined;
  invalidUserCount = undefined;
  selectedIndex: number = 0;

  constructor() {
  }

  validateExcel(file: any): Observable<any> {
    return of({
      validUsers: this.validUser,
      invalidUsers: this.invalidUser,
      validUserCount: "12000",
      invalidUserCount: "230"
    })
  }
}
