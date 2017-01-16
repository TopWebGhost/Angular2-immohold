import { Component } from '@angular/core';
import { AppState } from '../../app.service';
import { Router } from '@angular/router';
@Component({
  selector: 'portal-mobile',

  templateUrl: 'template.html',
  styleUrls: ['../scss/portal.style.scss'],

})
export class portalMobile {
  constructor(public appState: AppState,public router: Router){
    this.showContainer = false;
    //this.showContainer1 = false;
    this.showContainer2 = false;
    this.showContainer3 = false;
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


  private showContainer:boolean;
  private showContainer1:boolean;
  private showContainer2:boolean;
  private showContainer3:boolean;

   toggleContainer(){
    this.showContainer = !this.showContainer;
  }
  toggleContainer1(){
    this.showContainer1 = !this.showContainer1;
    this.showContainer2 = false;
    this.showContainer3 = false;
  }
  toggleContainer2(){
    this.showContainer2 = !this.showContainer2;
    this.showContainer1 = false;
    this.showContainer3 = false;
  }
  toggleContainer3(){
    this.showContainer3 = !this.showContainer3;
    this.showContainer1 = false;
    this.showContainer2 = false;
  }

}
