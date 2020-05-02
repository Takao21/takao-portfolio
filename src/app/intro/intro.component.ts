import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  playSequence: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    let that = this;
    let preArr: any = document.getElementsByClassName("prequel");
    setTimeout(function() {
      preArr[0].style.opacity = "1";
      setTimeout(function() {
        preArr[1].style.opacity = "1";
        setTimeout(function() {
          preArr[2].style.opacity = "1";
          setTimeout(function() {
            preArr[3].style.opacity = "1";
          }, 1700)
        }, 1600)
      }, 1700)
    },1000);

    this.playSequence = function() {
      document.getElementById("yesBtn").style.display = "none";
      let itemArr: any = document.getElementsByClassName("sequel-item");
      setTimeout(function() {
        itemArr[0].style.opacity = "1";
        setTimeout(function() {
          itemArr[1].style.opacity = "1";
          setTimeout(function() {
            itemArr[2].style.opacity = "1";
            setTimeout(function() {
              that.router.navigate(['/home']);
            }, 3000);
          }, 1750)
        }, 1700)
      }, 200)
    }
  }

}
