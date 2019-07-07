import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { DonorBlood } from '../donorblood';
import { Donor } from '../donor';
import { User } from '../user';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

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
