import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CheckMoodPage } from 'src/app/components/modals/check-mood/check-mood.page';

@Component({
  selector: 'app-abil-detail',
  templateUrl: './abil-detail.page.html',
  styleUrls: ['./abil-detail.page.scss'],
})
export class AbilDetailPage implements OnInit {
  counter:number= 0;
  timeLeft:number = 5;
  timer:any;
  constructor( private modalCtr:ModalController ) { }

  ngOnInit() {
  }

  
  async newModal(){
    const modal = await this.modalCtr.create({
      component: CheckMoodPage,
      componentProps: { value:123 }
    });
    return await modal.present();
  }


  // convertSeconds(s){
  //   let min = ('0' + Math.floor( s / 60 )).slice(-2);
  //   let sec = ('0' + s % 60).slice(-2);
  //   return min + ':' + sec;
  // }

  // timeIt(){
  //   let interval = setInterval(() => {
  //     this.counter++;
  //     this.timer = this.convertSeconds(this.timeLeft - this.counter);
  //     console.log(this.timer);
  //     if(this.counter == this.timeLeft ){
  //       console.log('timer' + this.timer);
  //       clearInterval(interval);
  //       console.log('Ding!');
  //     };
  //   },1000)
  // }

  

}
