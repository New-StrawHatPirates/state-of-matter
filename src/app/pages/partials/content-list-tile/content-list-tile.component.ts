import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-content-list-tile',
  templateUrl: './content-list-tile.component.html',
  styleUrls: ['./content-list-tile.component.css']
})
export class ContentListTileComponent implements OnInit {

  constructor() {
  }

  listItems = [
    'Item 1',
    'Item 2',
    'Item 3',
  ];

  ngOnInit(): void {
  }

}
