import { Component } from '@angular/core';
import { AppState } from '../../../app.service';
import { Router } from '@angular/router';
@Component({
  selector: 'contacts-mobile',

  templateUrl: './contacts-mobile.template.html',

  styleUrls: ['../../scss/articles-subpages.style.scss'],

})
export class contactsContentMobile {

  constructor(public appState: AppState,public router: Router){

  }

  goBack(): void {
    this.appState.set('direction','prev');
    let state = this.appState.get('stack');
    state.pop();
    //take of last element
    let link =state.pop();
    state.push(link);
    this.router.navigateByUrl(link,{ skipLocationChange: true });
    //this.router.navigateByUrl(this.appState.state,{ skipLocationChange: true });
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
