import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  username = new FormControl("")

  userForm : FormGroup

  constructor() { }

  ngOnInit() {
    this.userForm=new FormGroup({

    })
  }

  clear(){
    //this.username.reset
    this.username.setValue("")
  }

}
