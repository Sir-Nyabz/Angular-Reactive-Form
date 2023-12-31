import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { CustomValidationService } from '../services/custom-validation.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {


  userForm =this.fb.group({
    username:["",[Validators.required,Validators.minLength(3)],this.customValidator.validateUsernameNotTaken.bind(this.customValidator)],
    password:["",Validators.required],
    confirmPassword:["",Validators.required],
    address:this.fb.group({
      street:[""],
      city:[""],
      state:[""],
      zip:[""]
    })
  },
  {
    validator:this.customValidator.passwordMatchValidator("password","confirmPassword")
  }
  )

  get username(){
    return this.userForm.get("username")
  }

  get password(){
    return this.userForm.get("password")
  }

  get confirmPassword(){
    return this.userForm.get("confirmPassword")
  }

  stateOptions:string[]=['PA','QH','MI']

  userAddressInfo:any={
    street : 'Nii Ablor Mills Link',
    city:'My city',
    state:this.stateOptions[1],
    zip:'+233'
}

  constructor(private fb:FormBuilder, private customValidator:CustomValidationService) { }

  ngOnInit() {
  
  }

  autoFillAddress(){
    this.userForm.patchValue({
      address:{
        street: this.userAddressInfo.street,
        city: this.userAddressInfo.city,
        state: this.userAddressInfo.state,
        zip: this.userAddressInfo.zip
      }
    })
  }

  clear(){
    this.userForm.reset()
    //this.username.setValue("")
  }

  onSubmit(){
    console.log(this.userForm.value)
  }

}
