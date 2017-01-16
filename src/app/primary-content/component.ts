import { Component,EventEmitter } from '@angular/core';
import { AppState } from '../app.service';
import { Router } from '@angular/router';

import {WindowService} from "../shared/window/window.service";
import { slideIn,Orientation } from '../shared/animation/animation';
import{ EmitterService } from '../questions/emitter'

@Component({
  selector: 'primary-content',  // <home></home>
  templateUrl: './template.html',
  styleUrls: ['./scss/primary-content.style.scss'],
  host: {
    '[@routeAnimation]': 'true',
    '[style.display]': "'block'",
  },
  animations: [
    slideIn
  ],

})


export class primaryContent {
  public direction:Orientation;
  private isMobile:boolean;
  // Set our default values
  localState = { value: '' };
  emitter = EmitterService.get("channel_1");

  constructor(public appState: AppState,public mywindow: WindowService) {
    this.isMobile = mywindow.isMobile();
    this.direction = 'next';
  }

  ngOnInit() {
    this.direction = this.appState.get('direction');
    this.emitter.emit({'classTitle':'three','backLink':'success'});
  }
  ngOnDestroy(){
    this.direction = this.appState.get('direction');
  }
  onResize(event) {

    this.isMobile = this.mywindow.isMobile();
    //this.isMobile = (event.target.innerWidth<=200);

  }
}
