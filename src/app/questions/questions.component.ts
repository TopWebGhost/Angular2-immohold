import { Component} from '@angular/core';
import { AppState } from '../app.service';


import{ EmitterService } from '../questions/emitter'
import {WindowService} from "../shared/window/window.service";
import { Router } from '@angular/router';

import { slideIn,Orientation } from '../shared/animation/animation';


@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'questions',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: ['./scss/question.style.scss'],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './questions.template.html',
  host: {
    '[@routeAnimation]': 'true',
    '[style.display]': "'block'",
    // '[class]':"'animate-jump-off'"
  },
  animations: [
  slideIn
    ],
})


export class Questions {
  public direction:Orientation;
  private isMobile:boolean;
  emitter = EmitterService.get("channel_1");
  backLink:string;
  // Set our default values
  localState = { value: '' };


  constructor(public mywindow: WindowService,public appState: AppState,private router: Router) {
    this.direction ='none';
    this.backLink = '/home';
    this.emitter.subscribe(msg => {
      this.backLink = (msg.backLink);
      this.isMobile = mywindow.isMobile();
    });

  }

  ngOnInit() {
    this.direction =  this.appState.get('direction');
    console.log('hello `Questions` main component');
    // this.title.getData().subscribe(data => this.data = data);
  }
  ngOnDestroy(){
    this.direction = this.appState.get('direction');
  }

  submitState(value: string) {
    console.log('submitState', value);

    this.localState.value = '';
  }

  onResize(event) {

    this.isMobile = this.mywindow.isMobile();
    //this.isMobile = (event.target.innerWidth<=200);

  }
  goRecomendations(){
    this.appState.set('direction','next');
    //this.router.navigateByUrl('recomendations',{ skipLocationChange: true });
    this.router.navigateByUrl('primaryContent',{ skipLocationChange: true });
  }
  goPortal(){
    this.appState.set('direction','next');
    this.router.navigateByUrl('portal',{ skipLocationChange: true });
  }
  goHome(){
    this.appState.set('direction','prev');
    this.router.navigateByUrl('/',{ skipLocationChange: true });
  }
  goBack() {
    this.appState.set('direction','prev');
    this.router.navigateByUrl(this.backLink,{ skipLocationChange: true });
    //this.router.navigate([this.backLink]);
  }
  goTerms(){
    this.appState.set('direction','next');
    this.router.navigateByUrl('terms',{ skipLocationChange: true });
  }

  goDisclaimer(){
    this.appState.set('direction','next');
    this.router.navigateByUrl('disclaimer',{ skipLocationChange: true });
  }
  goContact() {
    this.appState.set('direction', 'next');
    this.router.navigateByUrl('contacts', {skipLocationChange: true});
  }
  goAbout() {
    this.appState.set('direction', 'next');
    this.router.navigateByUrl('about', {skipLocationChange: true});
  }
}
