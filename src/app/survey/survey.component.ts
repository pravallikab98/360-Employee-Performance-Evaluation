import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {LocalStorageService} from '../local-storage.service';



@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  surveyForm: FormGroup;
  constructor(public fb: FormBuilder, public http: HttpClient, public localStorage: LocalStorageService , private router: Router) { }

  ngOnInit() {
    this.surveyForm = this.fb.group({
      Nameoftheemployee : ['', [Validators.required, Validators.minLength(6)]],
      Gender : ['', [Validators.required]],
      Age : ['', [Validators.required]],
      EmployeeNumber : ['' , [Validators.required]],
      Attrition : ['' , [Validators.required]],
      MaritalStatus : ['' , [Validators.required]],
      Department : ['' , [Validators.required]],
      JobRole : ['' , [Validators.required]],
      BusinessTravel : ['' , [Validators.required]],
      DistanceFromHome : ['' , [Validators.required]],
      PerformanceRating : ['' , [Validators.required]],
      RelationshipSatisfaction : ['' , [Validators.required]],
      JobSatisfaction : ['' , [Validators.required]],
      EnvironmentSatisfaction : ['' , [Validators.required]],
      WorkLifeBalance : [''],
      TotalWorkingYears : ['' , [Validators.required]],
      YearsInCurrentRole : ['']
    });
  }

  store() {
    // tslint:disable-next-line:max-line-length
    this.http.get('http://127.0.0.1:5000/store?username=' + this.localStorage.getUserEmail()
      + '&Nameoftheemployee=' + this.surveyForm.get('Nameoftheemployee').value
      + '&Age=' + this.surveyForm.get('Age').value
      + '&Gender=' + this.surveyForm.get('Gender').value
      + '&EmployeeNumber=' + this.surveyForm.get('EmployeeNumber').value
      + '&Attrition=' + this.surveyForm.get('Attrition').value
      + '&MaritalStatus=' + this.surveyForm.get('MaritalStatus').value
      + '&Department=' + this.surveyForm.get('Department').value
      + '&JobRole=' + this.surveyForm.get('JobRole').value
      + '&BusinessTravel=' + this.surveyForm.get('BusinessTravel').value
      + '&DistanceFromHome=' + this.surveyForm.get('DistanceFromHome').value
      + '&PerformanceRating=' + this.surveyForm.get('PerformanceRating').value
      + '&RelationshipSatisfaction=' + this.surveyForm.get('RelationshipSatisfaction').value
      + '&JobSatisfaction=' + this.surveyForm.get('JobSatisfaction').value
      + '&EnvironmentSatisfaction=' + this.surveyForm.get('EnvironmentSatisfaction').value
      + '&WorkLifeBalance=' + this.surveyForm.get('WorkLifeBalance').value
      + '&YearsInCurrentRole=' + this.surveyForm.get('YearsInCurrentRole').value
      + '&TotalWorkingYears=' + this.surveyForm.get('TotalWorkingYears').value).subscribe();
    this.router.navigate(['/visualization']);

  }

}
