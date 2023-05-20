import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent {
  sessions: Session[] = [
    new Session(1, 'Keynote', '09:00', 'Loveleen kaur','loveleen.jpg',
    'Software Engineer - Astrotalk'),
    
    new Session(2, 
      'Accelerate your key learnings of modern Android app development with KMM', 
      '10:00', 'Adit Lal','Adit Lal.png',
       'Google Developer Expert - Android'),

    new Session(3, 
      'Unleashing creativity with DCGANs', 
      '11:00', 
      'Nitin Tiwari',
      'Nitin Tiwari.jpg', 
      'Google Developer Expert - Machine Learning'),

    new Session(4, 
      'Scaling your Web-Apps using Firebase & Google Cloud', 
      '12:00', 'Kartik Derasari',
      'Kartik Derasari.png', 
      'Google Developer Expert - Google Cloud'),

    new Session(5, 
      'Keeping Up with the Latest Trends in Web Development and Angular', 
      '01:00', 
      'Pranav Kumar Verma', 
      'Pranav Kumar Verma.png',
     'Senior Engineer - Nagarro'),
  ];
}
export class Session {
  id: number;
  title: string;
  startTime: string;
  speakerName: string;
  designation: string;
  imageName: string;

  constructor(id: number, title: string, startTime: string, speakerName: string, imageName: string, designation: string) {
    this.id = id;
    this.title = title;
    this.startTime = startTime;
    this.speakerName = speakerName;
    this.imageName = imageName;
    this.designation = designation;
  }
}
