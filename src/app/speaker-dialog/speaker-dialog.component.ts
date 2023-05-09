import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-speaker-dialog',
  templateUrl: './speaker-dialog.component.html',
  styleUrls: ['./speaker-dialog.component.scss']
})
export class SpeakerDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<SpeakerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onClose(): void {
    this.dialogRef.close();
  }
  
}
