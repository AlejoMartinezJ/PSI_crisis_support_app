import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.page.html',
  styleUrls: ['./abilities.page.scss'],
})
export class AbilitiesPage implements OnInit {

  constructor( private router:Router ) { }

  ngOnInit() {
  }

  goDetail(){
    this.router.navigate(['abil-detail']);
  }
}
