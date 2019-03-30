import { element, promise } from 'protractor';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router'
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss'],
})
export class QuestionsPage implements OnInit {

  behaviors:any = [
    {
      id:1,
      name: 'suicida',
      img: 'assets/images/questions/suicide.png'
    },
    {
      id:2,
      name: 'autolesion',
      img:'assets/images/questions/injury.png'
    },
    {
      id:3,
      name: 'atracon',
      img:'assets/images/questions/binge.png'
    },
    {
      id:4,
      name: 'llanto',
      img:'assets/images/questions/cry.png'
    },
    {
      id:5,
      name: 'agresion',
      img:'assets/images/questions/strike.png'
    }
  ];
    

  @ViewChild('IonSlides') slides: IonSlides;

  slideOpts = {
    effect: 'flip',
    pagination: false,
    allowTouchMove: false
  };

  constructor( private router:Router ) {}

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
    this.router.navigate(['/abilities']);
  }

  selected(){
    console.log(this.behaviors.name);
  }
}