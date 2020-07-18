import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {
  carouselAspectRatio = {height: '50vh', width: '49.5vw'};

  constructor() {
  }

  ngOnInit(): void {
  }

}
