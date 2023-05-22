import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import {MatSliderModule} from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SpeakerDialogComponent } from './speaker-dialog/speaker-dialog.component';
import { FooterComponent } from './footer/footer.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { FaqComponent } from './faq/faq.component';
import { PartnersComponent } from './partners/partners.component';
import { ModalComponent } from './modal-component/modal-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TeamComponent } from './team/team.component';
import {AngularFireAnalyticsModule} from "@angular/fire/compat/analytics";
import {AngularFireModule} from "@angular/fire/compat";
import { environment } from 'src/environments/environment.prod';
import {ScreenTrackingService, UserTrackingService}
from '@angular/fire/analytics';
import { WrapAfterThreeWordsPipe } from './pipes/wraptextpipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SpeakersComponent,
    ScheduleComponent,
    SpeakerDialogComponent,
    FooterComponent,
    FaqComponent,
    PartnersComponent,
    ModalComponent,
    TeamComponent,
    WrapAfterThreeWordsPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    MatSliderModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatDialogModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    FlexLayoutModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    NgbModule
  ],
  providers: [ScreenTrackingService,
    UserTrackingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
