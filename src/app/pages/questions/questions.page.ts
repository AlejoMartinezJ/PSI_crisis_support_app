import { element, promise } from 'protractor';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss'],
})
export class QuestionsPage implements OnInit {


  @ViewChild('IonSlides') slides: IonSlides;

  slideOpts = {
    effect: 'flip',
    pagination: false,
    allowTouchMove: false
  };

  constructor() {}

  ngOnInit() {
  }

  slideNext(slideView) {
    slideView.slideNext(500).then(() => {
      console.log('Pantalla completada');
    });
  }

  slidePrev(slideView) {
    slideView.slidePrev(500).then(() => {
      console.log('Retorno a Pantalla anterior');
    });
  }

  goToTipp() {

  }
}