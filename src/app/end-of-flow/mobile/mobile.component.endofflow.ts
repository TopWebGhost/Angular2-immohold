import { Component } from '@angular/core';
import { AppState } from '../../app.service';
import { Router } from '@angular/router';
@Component({
  selector: 'endofflow-mobile',  // <home></home>

  templateUrl: 'mobile.template.endofflow.html',

  styleUrls: ['../scss/mobile.style.endofflow.scss']
})
export class endofflowMobile {
constructor(public appState: AppState,public router: Router){

}

  goRecomendations(){
    this.appState.set('direction','prev');
    //this.router.navigateByUrl('recomendations',{ skipLocationChange: true });
    this.router.navigateByUrl('primaryContent',{ skipLocationChange: true });
  }

goHome(){
    this.appState.set('direction','prev');
  this.router.navigateByUrl('/',{ skipLocationChange: true });
}

  goBack(): void {
    this.appState.set('direction','prev');
    this.router.navigateByUrl('home',{ skipLocationChange: true });
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
