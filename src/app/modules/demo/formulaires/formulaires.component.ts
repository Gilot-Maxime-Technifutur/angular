import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaires',
  templateUrl: './formulaires.component.html',
  styleUrls: ['./formulaires.component.scss']
})
export class FormulairesComponent {

  constructor(private _formBuilder : FormBuilder){}


  myFormGroup : FormGroup = this._formBuilder.group({
    email : ['', [Validators.email, Validators.required]],
    username : ['', [Validators.required, this.moreThanFour()]],
    password : ['', [Validators.required, Validators.minLength(8)]]
  })

  submit(){
    let values = this.myFormGroup.value;

    console.log(values.username);

    console.log(this.myFormGroup.value['password']);
  }

  // FORM ARRAY

  myFormGroupWithArray : FormGroup = this._formBuilder.group({

    myArray : this._formBuilder.array([
      new FormControl('', Validators.required)
    ])
  })

  getArray() : FormArray {
    return this.myFormGroupWithArray.get('myArray') as FormArray
  }

  addControl(){
    this.getArray().push(new FormControl('', Validators.required))
  }

  removeControl(index : number){
    this.getArray().removeAt(index)
  }

  submitArray(){
    let values = this.myFormGroupWithArray.value;

    console.log(values['myArray']);

    this.getArray().clear()

  }

  // Custom Validator

  moreThanFour() : ValidatorFn {

    return (control : AbstractControl) : ValidationErrors | null => {

      let value = control.value;
      return value.length > 4 ? null : {tabuse : true}

    }

  }



}


