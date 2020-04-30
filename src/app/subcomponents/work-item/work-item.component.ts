import { Component, OnInit } from '@angular/core';
import { WORKS } from './work-list';

@Component({
  selector: 'app-work-item',
  templateUrl: './work-item.component.html',
  styleUrls: ['./work-item.component.scss']
})
export class WorkItemComponent implements OnInit {
  worklist = WORKS;
  constructor() { }

  ngOnInit(): void {

  }

}
