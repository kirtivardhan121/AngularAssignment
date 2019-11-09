import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  selectedCar;
  Cars = [
    {
        name : 'Bugatti',
        imgUrl : 'https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278__340.jpg'
    },
    {
      name : 'Lamborghini',
      imgUrl : 'https://cdn.pixabay.com/photo/2016/04/01/12/16/car-1300629__340.png'
  },
  {
    name : 'BMW',
    imgUrl : 'https://cdn.pixabay.com/photo/2015/09/02/12/25/bmw-918408__340.jpg'
  },
  {
    name : 'Audi',
    imgUrl : 'https://cdn.pixabay.com/photo/2016/12/07/21/50/audi-1890494__340.jpg'
  },
  {
    name : 'Cabriolet',
    imgUrl : 'https://cdn.pixabay.com/photo/2013/07/13/11/44/car-158548__340.png'
  }
  ];

  constructor() { }

  ngOnInit() {
  }

  sendCar(car) {
    console.log(car);
    this.selectedCar = car;
  }

}
