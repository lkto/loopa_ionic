import { Component, OnInit } from '@angular/core';

import { Storage } from '@ionic/storage';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public isLogin;
  public isLoad = false;
  constructor(
    private storage: Storage,
    private _route: ActivatedRoute,
    private _router: Router,) { 
     
    }

  async ngOnInit() {
    this.isLogin = localStorage.getItem('user');
    if(!this.isLogin){
      this._router.navigate(['/login']);
    }

    this.PageLoad();

    $('.shop-categoris').owlCarousel({
      loop:false,
      margin:0,
      nav:false,
      autoplay:false,  
      dots:false,
      items:5
    });
    $('.travel-slider').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      autoplay:false,  
      dots:false,
      items:2,
       
    });
    $('.carrusel-category').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      autoplay:false,  
      dots:false,
      items:3,
    });

    $('.perspective').removeClass('animate');
  }

  PageLoad(){
    $(window).on("load", function(){
      setInterval(function(){ 
          $('.preloader-wrap').fadeOut(300);
      }, 400);
      setInterval(function(){ 
          $('body').addClass('loaded');
      }, 600); 
    });
  }

}
