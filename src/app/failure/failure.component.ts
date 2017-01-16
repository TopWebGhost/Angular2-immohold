import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {WindowService} from "../shared/window/window.service";
import { AppState } from '../app.service';
import { Router } from '@angular/router';
import { slideIn,Orientation } from '../shared/animation/animation';
import {Location} from '@angular/common';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */



@Component({
  selector: 'failure',
  templateUrl: './failure.template.html',
//  styleUrls: ['./failure.style.scss'],
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
export class Failure {
  private direction:Orientation;
  private isMobile:boolean;
  localState: any;
  constructor(public route: ActivatedRoute,public mywindow: WindowService,public appState: AppState,private location: Location) {
    this.direction = 'none';
    this.isMobile = mywindow.isMobile();
  }

  ngOnInit() {
    this.direction = this.appState.get('direction');

    // this.route
    //   .data
    //   .subscribe((data: any) => {
    //     // your resolved data from route
    //     this.localState = data.yourData;
    //   });

    console.log('hello `About` component');
    // static data that is bundled
    // var mockData = require('assets/mock-data/mock-data.json');
    // console.log('mockData', mockData);
    // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
    this.asyncDataWithWebpack();
  }
  ngOnDestroy(){
    this.direction = this.appState.get('direction');
  }
  asyncDataWithWebpack() {
    // you can also async load mock data with 'es6-promise-loader'
    // you would do this if you don't want the mock-data bundled
    // remember that 'es6-promise-loader' is a promise
    setTimeout(() => {


    });
  }
  goBack(): void {
    window.history.back();
  }
  onResize(event) {

    this.isMobile = this.mywindow.isMobile();
    //this.isMobile = (event.target.innerWidth<=200);

  }
}
