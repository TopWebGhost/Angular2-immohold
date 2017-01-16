import { Component } from '@angular/core';
import { AppState } from '../app.service';
import { Router } from '@angular/router';
@Component({
  selector: 'linker',

  templateUrl: './template.html',

  styleUrls: ['./style.scss'],

})
export class linkerML {

  constructor(public appState: AppState,public router: Router){

  }

goPortal(){
    this.appState.set('direction','prev');
    this.router.navigateByUrl('portal',{ skipLocationChange: true });
  }
  goRecomendations(){
    this.appState.set('direction','prev');
    //this.router.navigateByUrl('recomendations',{ skipLocationChange: true });
    this.router.navigateByUrl('primaryContent',{ skipLocationChange: true });
  }

  goPrimaryContent(){
    this.appState.set('direction','prev');
    this.router.navigateByUrl('primaryContent',{ skipLocationChange: true });
  }
  goPrimaryContentShimmel(){
    this.appState.set('direction','prev');
    this.router.navigateByUrl('primaryContentShimmel',{ skipLocationChange: true });
  }

  goPrimaryContentFloor(){
    this.appState.set('direction','prev');
    this.router.navigateByUrl('primaryContentFloor',{ skipLocationChange: true });
  }

  goPrimaryContentPest(){
    this.appState.set('direction','prev');
    this.router.navigateByUrl('primaryContentPest',{ skipLocationChange: true });
  }

  goArticleShimmel1(){
    this.appState.set('direction','prev');
    this.router.navigateByUrl('contentArticleShimmel1',{ skipLocationChange: true });
  }
  goArticleShimmel2(){
    this.appState.set('direction','prev');
    this.router.navigateByUrl('contentArticleShimmel2',{ skipLocationChange: true });
  }

  goArticleFloor1(){
    this.appState.set('direction','prev');
    this.router.navigateByUrl('contentArticleFloor1',{ skipLocationChange: true });
  }
  goArticleFloor2(){
    this.appState.set('direction','prev');
    this.router.navigateByUrl('contentArticleFloor2',{ skipLocationChange: true });
  }
  goArticlePest1(){
    this.appState.set('direction','prev');
    this.router.navigateByUrl('contentArticlePest1',{ skipLocationChange: true });
  }
  goArticlePest2(){
    this.appState.set('direction','prev');
    this.router.navigateByUrl('contentArticlePest2',{ skipLocationChange: true });
  }
  goBack(): void {
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
