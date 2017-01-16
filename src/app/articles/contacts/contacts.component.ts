import { Component,EventEmitter } from '@angular/core';
import { AppState } from '../../app.service';
import { Router } from '@angular/router';

import {WindowService} from "../../shared/window/window.service";
import { slideIn,Orientation } from '../../shared/animation/animation';


@Component({
  selector: 'contacts',  // <home></home>
  templateUrl: './contacts.template.html',
  styleUrls: ['../scss/articles-subpages.style.scss'],
  host: {
    '[@routeAnimation]': 'true',
    '[style.display]': "'block'",
    // '[class]':"'animate-jump-off'"
  },
  animations: [
    slideIn
  ],

})


export class contentContacts {
  public direction:Orientation;
  private isMobile:boolean;
  // Set our default values
  localState = { value: '' };


  constructor(public appState: AppState,public mywindow: WindowService) {
    this.isMobile = mywindow.isMobile();
    this.direction = 'next';
  }

  ngOnInit() {
    console.log('hello `Contacts` component');
    this.direction = this.appState.get('direction');

  }
  ngOnDestroy(){
    this.direction = this.appState.get('direction');
  }




  onResize(event) {

    this.isMobile = this.mywindow.isMobile();
    //this.isMobile = (event.target.innerWidth<=200);

  }
}
