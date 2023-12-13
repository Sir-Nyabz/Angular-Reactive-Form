import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {


  userForm : FormGroup
  stateOptions:string[]=['PA','QH','MI']

  userAddressInfo:any={
    street : 'Nii Ablor Mills Link',
    city:'My city',
    state:this.stateOptions[1],
    zip:'+233'
}

  constructor() { }

  ngOnInit() {
    this.userForm=new FormGroup({
      username : new FormControl(""),
      password : new FormControl(""),
      confirmPassword : new FormControl(""),

      address:new FormGroup({
        street : new FormControl(""),
      city : new FormControl(""),
      state : new FormControl(""),
      zip : new FormControl("")
      })
    })
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
