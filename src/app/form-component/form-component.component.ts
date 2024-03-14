import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})
export class FormComponentComponent implements OnInit {
  //#region Initialize of Form
  form!: FormGroup;
  city = [{ name: "Lahore" }, { name: "Karachi" }, { name: "Islamabad" }, { name: "Rawalpindi" }];
  isReadOnly = false;
  isReadonlyFromDirective=false
  //#region lifecycle Hooks 
  constructor(private _formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.form = this._formBuilder.group({
      name: [],
      addresse: [],
      gender: [],
      city: []
    });
  }
  //#endregion

  //#region  Form Submission
  onSubmit() {
    this.isReadOnly=true
    console.log(this.form.value);
  }
  //#endregion
  readonlyFrom(event:any){
this.isReadonlyFromDirective=event
  }

}
