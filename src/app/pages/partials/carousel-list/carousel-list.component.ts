import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-carousel-list',
  templateUrl: './carousel-list.component.html',
  styleUrls: ['./carousel-list.component.css']
})
export class CarouselListComponent implements OnInit {

  constructor() {
  }

  urlBase = '../../../assets/img/anime/';
  imgUrl = [
    this.urlBase + '1.jpg',
    this.urlBase + '2.jpg',
    this.urlBase + '3.jpg',
  ];


  ngOnInit(): void {
  }

}
