import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
colorName = 'yellow';
color = 'green';
isActive = true;
  constructor() {
    setInterval(() => {
      this.isActive = !this.isActive;
    }, 2000);
  }

  ngOnInit() {
  }

}
