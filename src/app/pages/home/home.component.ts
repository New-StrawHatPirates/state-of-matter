import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  imageList = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
  ];
  imageListItemTitle = [
    'Movies',
    'Series',
    'Anime',
  ];

  ngOnInit(): void {
  }

}
