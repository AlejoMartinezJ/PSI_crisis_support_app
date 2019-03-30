import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router'

@Component({
  selector: 'app-check-mood',
  templateUrl: './check-mood.page.html',
  styleUrls: ['./check-mood.page.scss'],
})
export class CheckMoodPage implements OnInit {

  constructor(private modalCtrl: ModalController, private router: Router) { }

  ngOnInit() {
  }
  dismiss(){
    this.modalCtrl.dismiss();
  }
  goToAbilities(){
    this.dismiss();
    this.router.navigate(['/abilities'])
  }

  goToHome(){
    this.dismiss();
    this.router.navigate(['/home'])
  }
}
