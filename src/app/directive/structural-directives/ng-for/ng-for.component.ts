import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

 Products = [
    {
      img: 'https://cdn.pixabay.com/photo/2017/07/02/19/24/dumbbells-2465478__340.jpg',
      name: 'shoes',
      price: 2999
    },
    {
      img: 'https://cdn.pixabay.com/photo/2016/03/23/12/53/clock-1274699_1280.jpg',
      name: 'pocket watch',
      price: 4990
    },
    {
      img: 'https://cdn.pixabay.com/photo/2014/07/31/23/00/wristwatch-407096__340.jpg',
      name: 'Wrist Watch',
      price: 1299
    },

  ];

  constructor() { }

  ngOnInit() {
  }

}
