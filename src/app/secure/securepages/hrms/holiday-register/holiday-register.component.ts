import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-holiday-register',
  templateUrl: './holiday-register.component.html',
  styleUrls: ['./holiday-register.component.scss']
})
export class HolidayRegisterComponent {

  holidayfilterform!: FormGroup;
  addholidayform!: FormGroup;
  // myControl = new FormControl('');
  // filteredOptions!: Observable<string[]>;
  //  autocompleteArray: string[] = [];

  organizationArray: any[] = [];
  unitArray: any[] = [];
  holidayArray: any[] = [];
  yearArray: any[] = [];
  editflag: boolean = true;
  viewdata: any;

  displayedColumns: string[] = ['organization', 'unitname', 'holidayname', 'date', 'holidaytype','actions'];
  dataSource = new MatTableDataSource<any>();


  constructor(private fb: FormBuilder, private http: HttpClient, private snackbar: MatSnackBar) {

  }

  ngOnInit() {
    this.filterform();
    this.addholidayfilters();
    this.getorganizationlist();

    this.holidayfilterform.get('organization')?.valueChanges.subscribe((val: any) => {
      this.getunitlist();
    });
  

    this.holidayfilterform.get('unit')?.valueChanges.subscribe((val: any) => {
      this.getholidaylist();
    });

    this.getyear();

      this.addholidayform.get('organization')?.valueChanges.subscribe((val: any) => {
      this.getunitlist();
    });


    // this.filteredOptions = this.myControl.valueChanges.pipe(
    //   startWith(''),
    //   map(value => this._filter(value || '')),
    // );

  }

  //  private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.autocompleteArray.filter(option => option.toLowerCase().includes(filterValue));
  // }

  filterform() {
    this.holidayfilterform = this.fb.group({
      organization: ['', [Validators.required]],
      unit: [''],
      holiday: [''],
      year: ['']
    })
  }
  addholidayfilters() {
    this.addholidayform = this.fb.group({
      organization: ['', [Validators.required]],
      isapplicable: ['true', [Validators.required]],
      unit: [''],
      year: [''],
      holidaydate: [''],
      holidayname: ['', [Validators.required]],
      holidayType: ['', [Validators.required]]
    })
  }

  getorganizationlist() {
    let organization = this.holidayfilterform.get('organization')?.value;
    this.http.get(`https://demo-api-hrms.hitechdairy.in/api/Dropdown/get-organization-list?appId=1&organizationId=0&isExternal=true`).subscribe({
      next: (res: any) => {
        console.log("org list -", res.responseData);
        this.organizationArray = res.responseData;
        // this.autocompleteArray = this.organizationArray.map(org => org.text);
      },
      error: (error: any) => {
        console.error('Error fetching organization list:', error);
      }
    })
  }

  getunitlist() {
    let orgId = this.holidayfilterform.get('organization')?.value || this.addholidayform.get('organization')?.value;

    this.http.get(`https://demo-api-hrms.hitechdairy.in/api/Dropdown/get-branch-list?appId=1&organizationId=${orgId}&branchId=0&isExternal=true`).subscribe({
      next: (res: any) => {
        if (res.statusCode == 200) {
          this.unitArray = res.responseData;
        }
      },
      error: (error: any) => {
        console.error('Error fetching unit list:', error);
      }
    })
  }

  getholidaylist() {
    let unitid = this.holidayfilterform.get('unit')?.value;

    this.http.get(`https://demo-api-hrms.hitechdairy.in/api/Dropdown/get-holidayType-list`).subscribe({
      next: (res: any) => {
        if (res.statusCode == 200) {
          this.holidayArray = res.responseData;
        }
      },
      error: (error: any) => {
        console.error('Error fetching unit list:', error);
      }
    })
  }
  getyear() {
    this.http.get(`https://demo-api-hrms.hitechdairy.in/api/Dropdown/get-year-list`).subscribe({
      next: (res: any) => {
        if (res.statusCode == 200) {
          this.yearArray = res.responseData;
        }
      },
      error: (error: any) => {
        console.error('Error fetching unit list:', error);
      }
    })
  }

  holdayfiltersubmit() {
    let orgtanization = this.holidayfilterform.value.organization;
    console.log(this.holidayfilterform.value);
    let obj = this.holidayfilterform.value;

    this.http.get(`https://demo-api-hrms.hitechdairy.in/HolidayMaster/get-HolidayDetails?&pageNo=1&pageSize=10&organizationId=${obj.organization}&branchId=${obj.unit}&YearId=${obj.year}&holidayType=${obj.holiday}&isExternal=true&appId=1`).subscribe({
      next: (res: any) => {
        if (res.statusCode == 200) {
          console.log("data fetched", res.responseData1);
          this.dataSource.data = res.responseData1;
          this.snackbar.open("Data Fetched Successfully", '', {
            duration: 1000,
            horizontalPosition: 'right',
            verticalPosition: 'top'
          });
        }
      },
      error: (error: any) => {
        console.error('Error fetching holiday details:', error);
      }
    });
  }
  // https://demo-api-hrms.hitechdairy.in/HolidayMaster/save-update-holiday-details

  addholiday() {
    this.editflag = true;
    let obj = this.addholidayform.value;
    console.log("org---",this.addholidayform.get('organization')?.value,)

    let params: any = {
      "holidayName": obj?.holidayname,
      "holidayDate": obj?.holidaydate,
      "yearId": obj?.year,
      "holidayType": obj?.holidayType,
      "branchId": obj?.unit,
      "organizationId": this.addholidayform.get('organization')?.value,
      "createdDate": new Date().toISOString(),
      "updatedDate": new Date().toISOString(),
      "isDeleted": true,
     "isUnitApplicable": obj?.isapplicable === 'true' || obj?.isapplicable === true,
      "appId": 1,
      "isExternal": true
    }
    console.log("params", params);

    this.http.post('https://demo-api-hrms.hitechdairy.in/HolidayMaster/save-update-holiday-details',params).subscribe({
      next: (res: any) =>{
        if(res.statusCode == 200){
          console.log("Holiday added successfully", res.statusMessage, res.responseData);
          this.snackbar.open("Holiday Added Successfully", '', {
            duration: 1000,
            horizontalPosition: 'right',
            verticalPosition:'top'
          });
        }
        this.addholidayform.reset();
      },
      error: (error: any) =>{
         this.snackbar.open("Failed to Add Holiday ", '', {
            duration: 1000,
            horizontalPosition: 'right',
            verticalPosition:'top'
          });
      }
    })
  }
  clearfilter() {
    this.holidayfilterform.reset();
  }

  view(element: any){
    this.editflag = false;
      this.viewdata = element;
      console.log("edit form ---", element);
  }
  editdata(){
      this.editflag = true;
      this.addholidayform.patchValue({
        organization: this.viewdata?.organizationId,
        isapplicable: this.viewdata?.isUnitApplicable,
        unit: this.viewdata?.branchId,
        year: this.viewdata?.yearId,
        holidaydate: this.viewdata?.holidayDate,
        holidayname: this.viewdata?.holidayName,
        holidayType: this.viewdata?.holidayTypes
      })
  }
}


