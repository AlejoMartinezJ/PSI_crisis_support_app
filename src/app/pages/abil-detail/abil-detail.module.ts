import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AbilDetailPage } from './abil-detail.page';
import { CheckMoodPage } from 'src/app/components/modals/check-mood/check-mood.page';

const routes: Routes = [
  {
    path: '',
    component: AbilDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AbilDetailPage, CheckMoodPage],
  entryComponents: [CheckMoodPage]
})
export class AbilDetailPageModule {}
