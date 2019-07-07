import { Component, OnInit } from '@angular/core';
import { DonorBlood } from '../donorblood';
import { Donor } from '../donor';
import { User } from '../user';
import * as $ from 'jquery';
@Component({
  selector: 'app-card-css',
  templateUrl: './card-css.component.html',
  styleUrls: ['./card-css.component.css']
})
export class CardCssComponent implements OnInit {

  donors: DonorBlood[] = [
    {
      "donorBloodId":1,
      "city": "Hyderabad",
      "frequency": 0,
      "dateOfBloodDonation": "0",
      "donor": {
        "donorId":1,
        "bloodGroup": "A+ve",
        "age": 22,
        "user": {
          "firstName": "Divya",
          "lastName": "M",
          "contactNo": "9745176081",
          "emailId": "divya@gmail.com",
          "dateOfBirth": "02/12/1996",
          "address": "Gachibowli"
        }
      }
    },
    {
      "donorBloodId":2,
      "city": "Hyderabad",
      "frequency": 3,
      "dateOfBloodDonation": "01/04/2018",
      "donor": {
        "donorId":2,
        "bloodGroup": "A+ve",
        "age": 22,
        "user": {
          "firstName": "buhs",
          "lastName": "qwerty",
          "contactNo": "2222222222",
          "emailId": "buhs@gmail.com",
          "dateOfBirth": "01/02/1996",
          "address": "Gachibowli"
        }
      }
    },
    {
      "donorBloodId":3,
      "city": "Hyderabad",
      "frequency": 3,
      "dateOfBloodDonation": "01/07/2011",
      "donor": {
        "donorId":3,
        "bloodGroup": "AB+ve",
        "age": 24,
        "user": {
          "firstName": "ASD",
          "lastName": "GTY",
          "contactNo": "999923994939",
          "emailId": "asd@gmail.com",
          "dateOfBirth": "01/07/1995",
          "address": "Gachibowli"
        }
      }
    },
    {
      "donorBloodId":4,
      "city": "Hyderabad",
      "frequency": 4,
      "dateOfBloodDonation": "10/05/2011",
      "donor": {
        "donorId":4,
        "bloodGroup": "AB+ve",
        "age": 23,
        "user": {
          "firstName": "ABC",
          "lastName": "ASD",
          "contactNo": "999923994939",
          "emailId": "abc@gmail.com",
          "dateOfBirth": "19/06/1993",
          "address": "Gachibowli"
        }
      }
    },
    {
      "donorBloodId":5,
      "city": "Hyderabad",
      "frequency": 0,
      "dateOfBloodDonation": "0",
      "donor": {
        "donorId":5,
        "bloodGroup": "A+ve",
        "age": 22,
        "user": {
          "firstName": "Divya",
          "lastName": "M",
          "contactNo": "9745176081",
          "emailId": "divya@gmail.com",
          "dateOfBirth": "02/12/1996",
          "address": "Gachibowli"
        }
      }
    },
  ];
  donorBlood: DonorBlood;
  donor:Donor;
  user: User;
  submitted:boolean=false;

  constructor() {
    this.user=new User();
    this.donor=new Donor();
    this.donorBlood = new DonorBlood();
  }

  ngOnInit(){
      
  }

  searchDonor() {
    this.donorBlood.donor=this.donor;
    this.donorBlood.donor.user=this.user;
    this.submitted=true;
    $('input').prop('readonly',true);
  }
}
