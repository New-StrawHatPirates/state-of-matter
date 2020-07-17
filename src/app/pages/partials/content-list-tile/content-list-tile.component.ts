import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-content-list-tile',
  templateUrl: './content-list-tile.component.html',
  styleUrls: ['./content-list-tile.component.css']
})
export class ContentListTileComponent implements OnInit {

  @Input() listItemTitle: string;

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
