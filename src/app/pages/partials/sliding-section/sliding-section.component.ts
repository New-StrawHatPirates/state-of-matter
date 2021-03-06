import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbCarousel, NgbSlideEvent, NgbSlideEventSource} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sliding-section',
  templateUrl: './sliding-section.component.html',
  styleUrls: ['./sliding-section.component.css']
})
export class SlidingSectionComponent implements OnInit {

  @ViewChild('carousel', {static: true}) carousel: NgbCarousel;

  constructor() {
  }


  urlBase = '../../../assets/img/anime/';
  imgUrl = [
    this.urlBase + '1.jpg',
    this.urlBase + '2.jpg',
    this.urlBase + '3.jpg',
    this.urlBase + '4.jpg',
  ];

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;


  ngOnInit(): void {
  }

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT
        || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused
      && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }
}
