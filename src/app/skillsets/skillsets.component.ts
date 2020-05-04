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

  ngAfterViewInit() {
    document.getElementsByTagName('body')[0].classList.add('bg-skillsets');
  }

  ngOnDestroy() {
    document.getElementsByTagName('body')[0].classList.remove('bg-skillsets');
  }

  public happyTime() {
    window.alert("I wish you have a great day~ ^_^");
  }

  public animateBubbles() {
    document.getElementById("bubbles").style.display = "block";
  }
}
