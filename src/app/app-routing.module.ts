import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'abilities', loadChildren: './pages/abilities/abilities.module#AbilitiesPageModule' },
  { path: 'questions', loadChildren: './pages/questions/questions.module#QuestionsPageModule' },
  { path: 'abil-detail', loadChildren: './pages/abil-detail/abil-detail.module#AbilDetailPageModule' },
  { path: 'check-mood', loadChildren: './components/modals/check-mood/check-mood.module#CheckMoodPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
