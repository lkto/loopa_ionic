import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    console.log('hola');
  }

  register() {
    localStorage.setItem('user', 'Ember');
    //location.href = '/home';
    this._router.navigate(['/home']);
  }

}
