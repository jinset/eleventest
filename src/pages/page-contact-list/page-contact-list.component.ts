import { Component } from '@angular/core';

import {ContactData} from '../../data/contactData';
import {ContactModel} from '../../model/contactModel'
declare var $:any;

@Component({
  selector: 'app-page-contact-list',
  templateUrl: './page-contact-list.component.html',
  styleUrls: ['./page-contact-list.component.css']
})

export class PageContactListComponent  {
  private contactModel : ContactModel;
  private contactArray : Array<ContactModel> = [];

  private title: string; 
  private btnTitle: string;

  private contactID : string;
  private firstName: string;
  private lastName: string;
  private phoneNumber: string;
  private streetAddress1 :string;
  private streetAddress2: string;
  private city: string;
  private state:string;
  private zipCode: string;

  constructor() {
    ContactData.map((i) =>{
      this.contactArray.push(i);
    })
  }

  save(){
    if(this.btnTitle === "Add"){
      var element = new ContactModel(this.generateId(),this.firstName ,this.lastName,this.phoneNumber,this.streetAddress1,this.streetAddress2,this.city,this.state,this.zipCode);
      this.contactArray.push(element); 
    }else {
      this.update();
    }

    $("#modalAddForm").modal('hide');
  }

  update(){
    var element = new ContactModel(this.contactID,this.firstName ,this.lastName,this.phoneNumber,this.streetAddress1,this.streetAddress2,this.city,this.state,this.zipCode);
    this.contactArray.map((data, i)=>{
      if(data.contactID === this.contactID){
        this.contactArray[i] = element;
      }
    })
  }

  openModal(type:string, data){
    $("#modalAddForm").modal();
    if(type === "add"){
      this.cleanModel();
      this.title = "Add new contact";
      this.btnTitle = "Add";
    } else{
      this.title = "Edit contact";
      this.btnTitle = "Save";
      this.firstName = data.firstName;
      this.lastName = data.lastName;
      this.phoneNumber = data.phoneNumber;
      this.streetAddress1 = data.streetAddress1;
      this.streetAddress2 = data.streetAddress2;
      this.city = data.city;
      this.state = data.state;
      this.zipCode = data.zipCode;
      this.contactID = data.contactID;
    }
  }

  generateId(): string{
    let uID = Math.random().toString(36).substring(5);
    return uID;
  }

  deleteModal(obj){
    this.contactModel = obj;
    $("#modalDelete").modal();
  }

  delete(){
    for(var i = 0; i < this.contactArray.length; i++){
      if(this.contactArray[i] === this.contactModel){
        this.contactArray.splice(i, 1);
        break;
      }
    }
    $("#modalDelete").modal('hide');

  }

  cleanModel(){
    this.firstName = "";
    this.lastName = "";
    this.phoneNumber = "";
    this.streetAddress1 = "";
    this.streetAddress2 = "";
    this.city = "";
    this.state = "";
    this.zipCode = "";
    this.contactID = "";
  }

}
