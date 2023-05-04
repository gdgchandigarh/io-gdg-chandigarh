import { AfterViewInit, Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  backgroundColors = ['#428eff', '#38a852', '#ffbb01'];
  backgroundColor = this.backgroundColors[0];
  index = 0;

  constructor() {
    setInterval(() => {
      this.index = (this.index + 1) % this.backgroundColors.length;
      this.backgroundColor = this.backgroundColors[this.index];
    }, 4000);
  }

  ngOnInit() {
  }
  

}
