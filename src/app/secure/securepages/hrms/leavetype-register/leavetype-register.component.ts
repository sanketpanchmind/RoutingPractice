import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-leavetype-register',
  templateUrl: './leavetype-register.component.html',
  styleUrls: ['./leavetype-register.component.scss']
})
export class LeavetypeRegisterComponent {
  selectControl = new FormControl();
  searchControl = new FormControl();
  searchSubject: ReplaySubject<any> = new ReplaySubject<any>();
  options: any[] = [];
  filteredOptions: any[] = [];

  organizationArray: any[] = [];

  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    this.getorglist();
    this.onSearch();


  }

  onSearch() {
    this.searchControl.valueChanges.pipe().subscribe(() => { this.filterArrayDataZone(this.organizationArray, this.searchControl, 'text', this.searchSubject) });
  }


  getorglist() {
    this.http
      .get('https://demo-api-hrms.hitechdairy.in/api/Dropdown/get-organization-list?appId=1&organizationId=0&isExternal=true')
      .subscribe({
        next: (res: any) => {
          console.log("org--", res.responseData);

          this.organizationArray = res.responseData;
          this.filterArrayDataZone(this.organizationArray, this.searchControl, 'text', this.searchSubject);
        },
        error: (error: any) => {
          console.log("org err--", error);
        }
      });
  }


  filterArrayDataZone(array: any, formControl: any, keyName: any, subjectName: any) {
    if (!array) { return; }
    let search = formControl.value;
    if (!search) {
      subjectName.next(array.slice());
      return;
    } else { search = search.toLowerCase(); }

    subjectName.next(array.filter( // filter the array data
      (ele: any) => ele[keyName]?.toLowerCase().indexOf(search) > -1));
  }

}
