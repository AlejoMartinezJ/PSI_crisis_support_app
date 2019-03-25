import { AuthService } from '../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {

  email:string;
  password:string;

  constructor( 
    private router:Router,
    private authService:AuthService
  ) {}

  ngOnInit() {
  }

  onClick(){
    this.router.navigate(['/home']);
  }

  onSubmitLogin(){
    this.authService.login(this.email,this.password).then(res => {
      this.router.navigate(['/home']);
    }).catch(err => alert("Datos incorrectos"))
  }
}
