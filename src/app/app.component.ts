/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';


import { AppState } from './app.service';
import {LocationStrategy,Location} from "@angular/common";
import {subscribeOn} from "rxjs/operator/subscribeOn";
import {Router,ActivatedRoute} from "@angular/router";
import {PageScrollConfig} from 'ng2-page-scroll/bundles/ng2-page-scroll.umd.js';

declare var ga:Function;
/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.style.scss',
  ],
  templateUrl: './app.template.html'
})
export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';
  stack: string[];

  public RecordAnaylitcs(link) {
    if (window['dataLayer']) {
      window['dataLayer'].push(
          {
            'action': 'route changed',
            'route': link
          });
    }
  }

  constructor(public appState: AppState, public loc:Location,public myLocation: LocationStrategy, public myRouter:Router) {

    PageScrollConfig.defaultScrollOffset = 50;
    PageScrollConfig.defaultEasingLogic = {
      ease: (t: number, b: number, c: number, d: number): number => {
        // easeInOutExpo easing
        if (t === 0) return b;
        if (t === d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
      }
    };

    myLocation.onPopState(event => {
      this.loc.replaceState("/");
     //  console.log('_');
       //console.log(event);
      // console.log('_');

    });
    myRouter.events.subscribe(event => {
      this.loc.replaceState("/");
      //console.log(event);
      if(event.constructor.name === 'NavigationEnd') {
        window.scrollTo(0,0);
        // window['_app_base'] ='33534544';
       // history.pushState(event.url);
        let link =event.url;
        if(link ==='/'){
          link ='/home';
        }
        this.RecordAnaylitcs(this.loc['_baseHref'] + link);
        console.log('ga link:'+link);
      }
      if (event.constructor.name === 'NavigationStart') {

        console.log('direction = '+this.appState.get('direction'));
        let direction = (this.appState.get('direction')=='next');
        console.log(direction);
        this.stack = this.appState.get('stack');
        if((event.url ==='/')&&(!direction)){
          this.stack = ['/'];

        }
        if(direction){
          //if((event.url !=='/analysis')||(event.url !=='/success')){
if(event.url !=='/'){
  this.stack.push(event.url);

}
            //}

          console.log(this.appState.get('stack'))
        }
        this.appState.set('stack',this.stack);
        console.log( this.appState.get('stack'));


        // let history = this.appState.get('history');
        // history.prev = history.current;
        // history.current = event.url;
       //  if(event.url =="/"){
       // history.prev = null;
       //  }
       //  if((event.url ==='/success')||(event.url ==='/failure')){
       //
       //  // history.cu
       //    history.prev = 'questions/3';
       //  }
       //  this.appState.set('history',history);
       //
       //  console.log(this.appState.get('history'));

       //   console.log(event.url);

     }
    });
  }


  ngOnInit() {
    //this.appState.set('history',{'prev':null,'current':'/'});
    this.appState.set('stack',['/']);
    this.appState.set('direction','next');
    //this.appState.set('state','home');
    console.log('Initial App State', this.appState.state);

  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
