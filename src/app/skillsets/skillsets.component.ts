import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skillsets',
  templateUrl: './skillsets.component.html',
  styleUrls: ['./skillsets.component.scss']
})
export class SkillsetsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public animateBubbles() {
    document.getElementById("bubbles").style.display = "block";
  }
}
