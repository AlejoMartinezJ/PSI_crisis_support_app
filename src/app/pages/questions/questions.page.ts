import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss'],
})
export class QuestionsPage implements OnInit {

  slideOpts = {
    effect: 'flip',
    pagination: false,
    allowTouchMove: false,

  };

  constructor() { }

  ngOnInit() {
  }

  next() {
    // this.slideOpts.;
    console.log('holi');
  }

}
