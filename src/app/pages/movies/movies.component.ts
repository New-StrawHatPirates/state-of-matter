import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  carouselAspectRatio = {
    height: '50vh',
    width: '49.5vw',
  };


  ngOnInit(): void {
  }

}
