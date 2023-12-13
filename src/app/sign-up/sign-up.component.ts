import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {


  userForm =this.fb.group({
    username:["",[Validators.required,Validators.minLength(3)]],
    password:["",Validators.required],
    confirmPassword:["",Validators.required],
    address:this.fb.group({
      street:[""],
      city:[""],
      state:[""],
      zip:[""]
    })
  })
  stateOptions:string[]=['PA','QH','MI']

  userAddressInfo:any={
    street : 'Nii Ablor Mills Link',
    city:'My city',
    state:this.stateOptions[1],
    zip:'+233'
}

  constructor(private fb:FormBuilder) { }

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
