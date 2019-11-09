import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
  name: string = 'Vardhan';
  imgurl: string = 'https://cdn.pixabay.com/photo/2019/03/19/15/03/fantasy-4065924_960_720.jpg';
  address: string = 'BTM Bangalore 475005';
  colorName: string = 'red';
  isActive: boolean = false;
  colSpanValue: number = 2;



  ngOnInit() {
    setInterval(() => {
      this.colorName = 'green';
      this.isActive = !this.isActive;
    }, 2000);
  }

}
