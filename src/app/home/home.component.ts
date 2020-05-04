import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    document.getElementsByTagName('body')[0].classList.add('bg-home');
  }

  ngOnDestroy() {
    document.getElementsByTagName('body')[0].classList.remove('bg-home');
  }
}
