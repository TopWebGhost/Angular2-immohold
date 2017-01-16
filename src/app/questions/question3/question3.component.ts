import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */
import { slideIn,Orientation } from '../../shared/animation/animation';
import{ EmitterService } from '../emitter';
import {WindowService} from "../../shared/window/window.service";
import { AppState } from '../../app.service';
@Component({
  selector: 'question3',
//  styleUrls: ['../scss/question.style.scss'],
  templateUrl: './question3.template.html',
  host: {
    '[@routeAnimation]': 'true',
    '[style.display]': "'block'",
    '[class]':"'animate-jump-off'"
  },
  animations: [
    slideIn
    // trigger('routeAnimation', [
    //   state('in', style({opacity: 1})),
    //   transition('void => *', [
    //     style({opacity: 0}),
    //     animate('300ms ease-in-out')
    //   ]),
    //   transition('* => void', [
    //     animate('300ms ease-in-out', style({opacity: 0}))
    //   ])
    // ])
  ]
})
export class Question3 {
  private direction:Orientation;
  private isMobile:boolean;
  emitter = EmitterService.get("channel_1");
  localState: any;
  constructor(public route: ActivatedRoute,public mywindow: WindowService,public appState: AppState) {
    this.direction = 'prev';
    this.isMobile = mywindow.isMobile();

  }

  ngOnInit() {
    this.direction =  this.appState.get('direction');
    this.emitter.emit({'classTitle':'three','backLink':'questions/2'});
    this.route
      .data
      .subscribe((data: any) => {
        // your resolved data from route
        this.localState = data.yourData;
      });

    console.log('hello `question1` component');
    // static data that is bundled
    // var mockData = require('assets/mock-data/mock-data.json');
    // console.log('mockData', mockData);
    // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
    this.asyncDataWithWebpack();
  }

  ngOnDestroy(){
    this.direction =  this.appState.get('direction');
  }
  asyncDataWithWebpack() {
    // you can also async load mock data with 'es6-promise-loader'
    // you would do this if you don't want the mock-data bundled
    // remember that 'es6-promise-loader' is a promise
    setTimeout(() => {

      // System.import('../../assets/mock-data/mock-data.json')
      //   .then(json => {
      //     console.log('async mockData', json);
      //     this.localState = json;
      //   });

    });
  }
  onResize(event) {

    this.isMobile = this.mywindow.isMobile();
    //this.isMobile = (event.target.innerWidth<=200);

  }
}
