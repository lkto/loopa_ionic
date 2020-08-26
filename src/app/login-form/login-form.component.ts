import { Component, OnInit } from '@angular/core';

import { Storage } from '@ionic/storage';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  public isLogin;

  constructor(
    private storage: Storage,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { 

  }

  async ngOnInit() {
    this.isLogin = localStorage.getItem('user');
    if(this.isLogin){
      this._router.navigate(['/home']);
    }
    $('.perspective').removeClass('animate');
  }

  login() {
    localStorage.setItem('user', 'Ember');
    location.href = '/home';
    //this._router.navigate(['/home']);
  }

  register() {
    this._router.navigate(['/register']);
  }

}
