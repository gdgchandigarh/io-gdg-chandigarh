import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  showButton = false;
  @ViewChild('backToTop', { static: false }) backToTop!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    if (window.pageYOffset > 50) {
      this.showButton = true;
    } else {
      this.showButton = false;
    }
  }
  onWindowScroll() {
    if (window.pageYOffset > 50) {
      this.backToTop.nativeElement.classList.add('show');
    } else {
      this.backToTop.nativeElement.classList.remove('show');
    }
  }
  
  toFAQ() {
    const element = document.getElementById("faq");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
