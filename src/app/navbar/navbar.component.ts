import { Component, ViewChild } from '@angular/core';
import { Observable, map } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  
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
  
  toSpeakers() {
    const element = document.getElementById("speakers");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }
  

  toSchedule() {
    const element = document.getElementById("schedule");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }
  toPartners() {

  }

  toFAQ() {
    const element = document.getElementById("faq");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }
  register() {

  }

  toTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    
  }

  toggleSidenav() {
    this.sidenavOpen = !this.sidenavOpen;
  }
  toggle() {
    this.sidenav.toggle();
    if (this.sidenav.opened) {
      document.querySelector('mat-toolbar')?.classList.add('mat-sidenav-opened');
    } else {
      document.querySelector('mat-toolbar')?.classList.remove('mat-sidenav-opened');
    }
  }
  
}
