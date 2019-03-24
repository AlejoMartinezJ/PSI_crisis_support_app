import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {

  constructor( 
    private router:Router
  ) {}

  ngOnInit() {
  }

  onClick(){
    this.router.navigate(['/home']);
  }
}
