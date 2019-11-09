import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  news;

  constructor(private http: HttpClient) { 
    this.getNews();
  }

  ngOnInit() {
  }

  getNews() {
    this.http.get <any> ('https://newsapi.org/v2/top-headlines?country=in&apiKey=68be8989b8134dcead2a92b943965847').subscribe(data => {
    this.news = data.articles;
    }, err => {
      console.log(err);
    } , () => {
      console.log('News got Succexxfully');
    });
  }
}
