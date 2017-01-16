import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {setTimeout} from "timers";
import {document} from "@angular/platform-browser/src/facade/browser";
import {WindowService} from "../shared/window/window.service";
import { slideIn,Orientation } from '../shared/animation/animation';
import { moldService } from "../shared/data/mold.service";
import {Location} from '@angular/common';
import { AppState } from '../app.service';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`About` component loaded asynchronously');

@Component({
  selector: 'analysis',
  styleUrls: ['./analysis.style.scss'],
  templateUrl: './analysis.template.html',
  host: {
    '[@routeAnimation]': 'true',
    '[style.display]': "'block'",
    '[class]': "'animate-jump-off'"
  },
  animations: [
    slideIn
    // trigger('routeAnimation', [
    //   state('in', style({ opacity: 1 })),
    //   transition('void => *', [
    //     style({ opacity: 0 }),
    //     animate('300ms ease-in-out')
    //   ]),
    //   transition('* => void', [
    //     animate('300ms ease-in-out', style({ opacity: 0 }))
    //   ])
    // ])
  ]
})

export class Analysis {
  public direction:Orientation;
  localState: any;
  private isMobile: boolean;
  protected decision:boolean;

  constructor(public route: ActivatedRoute, private router: Router, public mywindow: WindowService,private _moldService:moldService,private state:AppState) {
    this.direction ='next';
    this.isMobile = mywindow.isMobile();
    // router.events.subscribe(event => {
    //   if (event.constructor.name === 'NavigationEnd') {
    //
    //
    //
    //   }
    // });

  }

  ngOnInit() {

// this.decision = this._moldService.doYourselfDecision();
//     setTimeout(() => {
//       this.router.navigateByUrl('success',{ skipLocationChange: true });
//       if (this.decision) {
//         this.router.navigateByUrl('success',{ skipLocationChange: true });
//       }
//       else{
//         this.router.navigateByUrl('failure',{ skipLocationChange: true });
//       }
//     }, 2500)





    console.log('hello `About` component');
    // static data that is bundled
    // var mockData = require('assets/mock-data/mock-data.json');
    // console.log('mockData', mockData);
    // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
    this.asyncDataWithWebpack();
  }

  doDecision(){
    this.state.set('direction','next');
      this.decision = this._moldService.doYourselfDecision();
      setTimeout(() => {
        this.router.navigateByUrl('success',{ skipLocationChange: true });
        if (this.decision) {
          this.router.navigateByUrl('success',{ skipLocationChange: true });
        }
        else{
          this.router.navigateByUrl('failure',{ skipLocationChange: true });
        }
      }, 2000)


  }
  asyncDataWithWebpack() {
    // you can also async load mock data with 'es6-promise-loader'
    // you would do this if you don't want the mock-data bundled
    // remember that 'es6-promise-loader' is a promise
    setTimeout(() => {
      this.doDecision();
    }, 500)

  }

  onResize(event) {

    this.isMobile = this.mywindow.isMobile();


    //this.isMobile = (event.target.innerWidth<=200);

  }



}
