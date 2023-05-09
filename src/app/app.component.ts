import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sessions: Session[] = [
    new Session(1, 'Keynote', '09:00', 'Loveleen kaur','loveleen.jpg'),
    new Session(1, 'Flutter', '10:00', 'Yatin Nayyar', 'loveleen.jpg'),
    new Session(1, 'Fun Activity', '11:00', 'Harneet Singh','harneet.jpeg'),
    new Session(1, 'Android', '12:00', 'Test User',    'harneet.jpeg'),
    new Session(1, 'Artificial Intelligence', '01:00', 'Test User 2', 'loveleen.jpg'),
    new Session(1, 'Google Cloud', '02:00', 'Test User 3', 'loveleen.jpg'),
    new Session(1, 'Firebase', '03:00', 'Test User 4', 'loveleen.jpg'),
    new Session(1, 'Fun Activity', '04:00', 'Test User 4', 'loveleen.jpg'),
    new Session(1, 'Closing Note', '05:00', 'Test User 5', 'loveleen.jpg'),

  ];
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

export class Session {
  id: number;
  title: string;
  startTime: string;
  speakerName: string;
  imageName: string;

  constructor(id: number, title: string, startTime: string, speakerName: string, imageName: string) {
    this.id = id;
    this.title = title;
    this.startTime = startTime;
    this.speakerName = speakerName;
    this.imageName = imageName;
  }
}
