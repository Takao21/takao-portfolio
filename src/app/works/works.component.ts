import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  meowed = false;
  meowThreshold = 0;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    document.getElementsByTagName('body')[0].classList.add('bg-works');
  }

  ngOnDestroy() {
    document.getElementsByTagName('body')[0].classList.remove('bg-works');
  }

  public meow() {
    if (!this.meowed) {
      if (this.meowThreshold < 7) {
        if (document.getElementById("cat-speech")) {
          document.getElementById("cat-speech").textContent += "."
        }else {
          let cat = document.getElementsByClassName("cat-container")[0];
          let meow = document.createElement("p");
          meow.setAttribute("id", "cat-speech");
          meow.textContent = "Meow...";
          cat.appendChild(meow);
          document.getElementById("pat-inst").style.opacity = "0";
        }
        this.meowThreshold++;
      }else if (this.meowThreshold < 15) {
        document.getElementById("cat-speech").textContent = "Too many pats.";
        this.meowThreshold++;
      }else {
        document.getElementById("cat-speech").textContent = "*The cat burnt into ashes due to overpatting.*";
        document.getElementsByClassName("fas fa-cat")[0].remove();
        this.meowed = true;
      }
    }
  }

}
