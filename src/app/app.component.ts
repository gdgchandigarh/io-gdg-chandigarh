import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  isSmallScreen = false;
  sidenavOpen = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

    backgroundColors = ['#428eff', '#38a852', '#ffbb01'];
    backgroundColor = this.backgroundColors[0];
    index = 0;
   constructor(private breakpointObserver: BreakpointObserver) {
    setInterval(() => {
      this.index = (this.index + 1) % this.backgroundColors.length;
      this.backgroundColor = this.backgroundColors[this.index];
    }, 4000);
   }

  ngOnInit() {
    this.breakpointObserver.observe(['(max-width: 767px)']).subscribe(result => {
      this.isSmallScreen = result.matches;
    });
  }

}

