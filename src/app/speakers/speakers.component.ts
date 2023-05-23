import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SpeakerDialogComponent } from '../speaker-dialog/speaker-dialog.component';


@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent implements OnInit {
  speakers: Speaker[] = [
    new Speaker(1, 'Welcome Keynote', '09:00', 'Loveleen kaur','loveleen.jpg',
    `Loveleen Kaur, a bundle of positivity and happiness, 
    this tech-savvy girl loves mountains and works wonders with technology. 
    She is currently working as an Android Developer and result oriented professional with 5 years of experience. 
    She is Core Team Member of of GDG Chandigarh and Google Android Educator. Hailing from the technology field, 
    she loves logic, but also has a passion for creativity. In her free time, She loves to mentor people to help them 
    learn and grow in their career.`,  'Astrotalk', 'Software Engineer','loveleen.nancy@gmail.com'),
    
    new Speaker(2, 
      'Accelerate your key learnings of modern Android app development with KMM', 
      '10:00', 'Adit Lal','Adit Lal.png',
      `
    Adit is a Senior Android Engineer, currently working as an Individual Consultant. 
    He has been working in the industry for close to about 10+ years primarily helping build android mobile products and 
      scaling them up. Some of his hobbies are Stargazing, Travel, and Landscape Photography.`,
       'Android', 'Google Developer Expert', 'aditlal90@gmail.com'),

    new Speaker(3, 
      'Unleashing creativity with DCGANs', 
      '11:00', 
      'Nitin Tiwari',
      'Nitin Tiwari.jpg', 
    `
    Nitin is a Google Developer Expert in Machine Learning and an avid learner of ML who loves to understand how tech
    works and share his knowledge and expertise with the community.`,
     'Machine Learning', 'Google Developer Expert', 'tiwarinitin1999@gmail.com'),

    new Speaker(4, 
      'Scaling your Web-Apps using Firebase & Google Cloud', 
      '12:00', 'Kartik Derasari',
      'Kartik Derasari.png', 
    `
    Kartik is a Technical Consultant by profession & an advocate for technology by passion. 
    He has been recognized as a Google Developer Expert for Google Cloud. Being a 6X Google Cloud Certified Professional, 
    he contributes to App-Dev & Analytics projects as a Full-Stack Engineer. 
    He runs the Google Developers Group for Cloud professionals and he's been also recognized as a Google Cloud Champion 
    Innovator for Serverless App Development. He has delivered over 50 technical Speakers and has hosted more than 
    65 developer-focused events & conferences. He has also been a Google DSC Lead and an ML Facilitator of Google 
    AI's Explore ML Program.`, 'Google Cloud', 'Google Developer Expert', 'derasarikartik@gmail.com'),

    new Speaker(5, 
      'Keeping Up with the Latest Trends in Web Development and Angular', 
      '01:00', 
      'Pranav Kumar Verma', 
      'Pranav Kumar Verma.png',
    `
    Pranav is a Full Stack Developer working as a Senior Engineer at Nagarro. 
    He has over 6.5 years of experience in the IT industry, and really passionate about what he do. His focus is on Angular, 
    and he love working on both front-end and back-end of web applications.`,
     'Nagarro','Senior Engineer', 'prnvkmr954@gmail.com'),

     new Speaker(6, 
      'Import Community as Fun', 
      '01:00', 
      'Aashi', 
      'Aashi.png',
    `
    Aashi is the lead organizer for TensorFlow UserGroup Chandigarh and a 2X Kaggle expert. She is a ml enthusiast who loves to work on real world problems.`,
    'MedEnGauge Healthcare','Co-Founder', ''),

     new Speaker(7, 
      'Welcome Keynote', 
      '01:00', 
      'Kamal Vaid', 
      'Kamal Vaid.png',
    `
    Kamal Vaid is a Google Certified Android Developer and Technology Lead at Infosys. He is also a Google Developer Expert For Google Assistant and proficient in Android Development with experience in Design, Development and API Integration of Android based applications.`,
     'Assistant', 'Google Developer Expert', 'kamalvaid1989@gmail.com'),
  ];

  constructor(@Inject(MatDialog) public dialog: MatDialog) {}

  ngOnInit(): void {
    this.sortSpeakersByName()
  }

  openSpeakerDialog(speaker: any) {
    const dialogRef = this.dialog.open(SpeakerDialogComponent, {
      data: { speaker },
      width: '700px',
      enterAnimationDuration: '800'
    });
  }

  sortSpeakersByName(): void {
    this.speakers.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }


}

export class Speaker {
  id: number;
  title: string;
  startTime: string;
  name: string;
  designation: string;
  imageName: string;
  bio: string;
  company: string;
  email: string;

  constructor(id: number, title: string, startTime: string, name: string,
     imageName: string, bio: string, designation: string,company: string, email: string) {
    this.id = id;
    this.title = title;
    this.startTime = startTime;
    this.name = name;
    this.imageName = imageName;
    this.bio = bio;
    this.designation = designation;
    this.company = company;
    this.email = email;
  }
}