import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.perspective').removeClass('animate');
  }

}
