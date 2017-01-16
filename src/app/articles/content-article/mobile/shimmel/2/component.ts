import { Component } from '@angular/core';
import { AppState } from '../../../../../app.service';
import { Router } from '@angular/router';
@Component({
  selector: 'mobile-article-content-shimmel-2',

  templateUrl: './template.html',

  styleUrls: ['../../../../scss/articles-subpages.style.scss'],

})
export class articleContentMobileShimmel2 {
  constructor(public appState: AppState, private router: Router) {

  }
  goRecomendations(){
    this.appState.set('direction','prev');
    //this.router.navigateByUrl('recomendations',{ skipLocationChange: true });
    this.router.navigateByUrl('primaryContent',{ skipLocationChange: true });
  }

  goHome() {
    this.appState.set('direction', 'prev');
    this.router.navigateByUrl('/', {skipLocationChange: true});
  }

  goBack() {
    this.appState.set('direction', 'prev');
    //this.router.navigateByUrl('recomendations', {skipLocationChange: true});
    this.router.navigateByUrl('primaryContent',{ skipLocationChange: true });
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
