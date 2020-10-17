import { Component, OnInit } from '@angular/core';
import { Countries } from '../shared/countries'
@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  countries = Countries;
  constructor() { }

  ngOnInit(): void {
  }

}
