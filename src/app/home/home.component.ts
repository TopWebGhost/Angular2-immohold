import { Component,EventEmitter } from '@angular/core';
import { AppState } from '../app.service';
import { Router } from '@angular/router';

import {WindowService} from "../shared/window/window.service";
import { slideIn,Orientation } from '../shared/animation/animation';


@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  // Our list of styles in our component. We may add more to compose many styles together
  //styleUrls: ['./scss/home.style.scss'],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './home.template.html',
  host: {
    '[@routeAnimation]': 'true',
    '[style.display]': "'block'",
    // '[class]':"'animate-jump-off'"
  },
  animations: [
    slideIn
    ],

  })


export class Home {
public direction:Orientation;
  private isMobile:boolean;
  // Set our default values
  localState = { value: '' };


  constructor(public appState: AppState,public mywindow: WindowService) {
    //this.isMobile = (window.innerWidth<=200);
  this.isMobile = mywindow.isMobile();
    this.direction = 'next';
  }

  ngOnInit() {
    console.log('hello `Home` component');
this.direction ='prev';
    // this.title.getData().subscribe(data => this.data = data);
  }
  ngOnDestroy(){
    this.direction ='next';
    this.appState.set('direction', this.direction);

  }




  onResize(event) {

    this.isMobile = this.mywindow.isMobile();
    //this.isMobile = (event.target.innerWidth<=200);

  }
}
