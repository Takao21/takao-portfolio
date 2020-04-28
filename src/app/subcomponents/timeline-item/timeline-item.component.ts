import { Component, OnInit } from '@angular/core';
import { LIST } from './timeline-list';

@Component({
  selector: 'app-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.scss']
})
export class TimelineItemComponent implements OnInit {
  list = LIST;
  constructor() { }

  ngOnInit(): void {
  }

}
