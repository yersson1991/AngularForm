import { Component, OnInit } from '@angular/core';
import { DataDbService } from '../../service/data-db.service';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { Message } from '../../models/message.interfaace';


@Component({
  selector: 'AngularFormContact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  emailPattern: any =/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;


  createFormGroup(){
    return new FormGroup({
      email: new FormControl ('',[Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern)]),
      name: new FormControl ('',[Validators.required, Validators.minLength(3)]),
      message: new FormControl('',[Validators.required, Validators.minLength(10), Validators.maxLength(100)])
       
    });

  }

  contactForm: FormGroup;
  constructor (private dbData: DataDbService){
    this.contactForm= this.createFormGroup();
  }

  ngOnInit(): void {
  }

  onResetForm(){
    this.contactForm.reset();

  }

  onSaveForm(){

    if (this.contactForm.valid ){
      this.dbData.saveMessage(this.contactForm.value);
      this.onResetForm();
      console.log("valid");

    }else{
      console.log("no valid");
    }
    
   }

  get name(){return this.contactForm.get('name');}
  get email(){return this.contactForm.get('email');}
  get message(){return this.contactForm.get('message');}
}
