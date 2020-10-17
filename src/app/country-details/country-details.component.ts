import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../shared/country'

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {

  @Input()
  country: Country;
  dis:boolean = true;
  title = '';
  // @ts-ignore
  ss;
  inputHandler(event: any): void{
    const value = event.target.value;
    console.log(value);
    this.title = value;
    this.ss = this.title.length;
  }

  constructor() { }

  changeAllInfo(): void{
    this.dis = !this.dis;
  }
  ngOnInit(): void {
  }

}
