import { Component, OnInit } from '@angular/core';
import { DonorBlood } from '../donorblood';
import { Donor } from '../donor';
import { User } from '../user';
import * as $ from 'jquery';

@Component({
  selector: 'app-table-form-control',
  templateUrl: './table-form-control.component.html',
  styleUrls: ['./table-form-control.component.css']
})
export class TableFormControlComponent implements OnInit {

  donorBlood: DonorBlood;
  donor: Donor;
  user: User;
  submitted: boolean = false;

  constructor() {
    this.user = new User();
    this.donor = new Donor();
    this.donorBlood = new DonorBlood();
  }

  ngOnInit() {

  }

  searchDonor() {
    this.donorBlood.donor = this.donor;
    this.donorBlood.donor.user = this.user;
    this.submitted = true;
    $('input').prop('readonly', true);
  }
}
