import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SpeakerDialogComponent } from '../speaker-dialog/speaker-dialog.component';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent {
  speakers = [
    {
      name: 'Loveleen Kaur',
      company: 'Astrotalk',
      image: 'loveleen.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel ultrices mauris, vitae ullamcorper sapien.'
    },
    {
      name: 'Yatin Nayyar',
      company: 'WIPRO',
      image: 'yatin.jpeg',
      description: 'Sed id elit eget elit vestibulum congue. Nullam vel orci vitae lacus laoreet hendrerit. '
    },
    {
      name: 'Harneet Singh',
      company: 'KPMG',
      image: 'harneet.jpeg',
      description: 'Phasellus in dui vel est eleifend mattis non ut nulla. Morbi vel sagittis enim.'
    },
    {
      name: 'Loveleen Kaur',
      company: 'Astrotalk',
      image: 'loveleen.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel ultrices mauris, vitae ullamcorper sapien.'
    },
    {
      name: 'Yatin Nayyar',
      company: 'WIPRO',
      image: 'yatin.jpeg',
      description: 'Sed id elit eget elit vestibulum congue. Nullam vel orci vitae lacus laoreet hendrerit. '
    },
    {
      name: 'Harneet Singh',
      company: 'KPMG',
      image: 'harneet.jpeg',
      description: 'Phasellus in dui vel est eleifend mattis non ut nulla. Morbi vel sagittis enim.'
    }
  ];

  constructor(@Inject(MatDialog) public dialog: MatDialog) {}

  openSpeakerDialog(speaker: any) {
    const dialogRef = this.dialog.open(SpeakerDialogComponent, {
      data: { speaker }
    });
  }
}
