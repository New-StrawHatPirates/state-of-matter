import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  imgName = [
    'naruto.png',
    'james.png',
    'farnsworth.png',
    'luffy.jpg',
  ];

  constructor() {
  }

  ngOnInit(): void {

  }

  getImageName = () => this.imgName[Math.floor(Math.random() * this.imgName.length)];
}
