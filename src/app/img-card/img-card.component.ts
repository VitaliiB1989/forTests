import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.css']
})
export class ImgCardComponent implements OnInit {

public imgSrc:string = ''

  constructor() { }

  ngOnInit() {
  	this.getNewImg();
  }
  getNewImg(){
  	this.imgSrc = "https://cataas.com/cat/says/Progressive%20Web%20Cat" + '?ts=' + Date.now();
  	console.log(this.imgSrc)
  }
}
