import { Component } from '@angular/core';
import { AppState } from '../../../app.service';
import { Router } from '@angular/router';
@Component({
  selector: 'primary-content-floor-mobile',

  templateUrl: 'template.html',
  styleUrls: ['../../scss/primary-content.style.scss'],
})

export class primaryContentFloorMobile {
  constructor(public appState: AppState,public router: Router){

  }
  goRecomendations(){
   return false;
  }
  goHome(){
    this.appState.set('direction','prev');
    this.router.navigateByUrl('/',{ skipLocationChange: true });
  }
  goBack(): void {
    this.appState.set('direction','prev');
    this.router.navigateByUrl('success',{ skipLocationChange: true });
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
