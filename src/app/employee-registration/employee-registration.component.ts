import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {

  departments: any[] = [];
  employeeList: any[] = [];
  isListView:boolean = true;
  constructor(private http: HttpClient) { 

  }

  ngOnInit(): void {
    this.loadDepartment();
    this.loadEmployee();
  }

  loadDepartment(){
    this.http.get("assets/departments.json").subscribe((res:any)=>{
      this.departments = res.data;
    })
  }

  loadEmployee(){
    this.http.get("assets/getEmployee.json").subscribe((res:any)=>{
      this.employeeList = res.data;
    })
  }

}
