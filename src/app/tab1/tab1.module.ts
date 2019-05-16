import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { DetailsPage } from './details/details.page';
import { DetailsPageModule } from './details/details.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    DetailsPageModule,
    RouterModule.forChild([
    { 
      path: '', component: Tab1Page,
    },
    {
      path: 'details', component: DetailsPage
    }
  ])
  ],
  declarations: [Tab1Page],
  providers: [QRScanner]
})
export class Tab1PageModule {}
