import { Component } from '@angular/core';
import { AppState } from '../../app.service';
import { Router } from '@angular/router';
import { moldService } from "../../shared/data/mold.service";
import { Photo } from "../../shared/data/image.class";
@Component({
  selector: 'photo-mobile',  // <home></home>

  templateUrl: 'mobile.template.photo.html',

  styleUrls: ['../scss/mobile.style.photo.scss']
})
export class photoMobile {
  public image:Photo;
constructor(public appState: AppState, public router: Router,public _moldService:moldService){

}

ngOnInit(){
  this.image = this._moldService.moldData.photo;
}
  goRecomendations(){
    this.appState.set('direction','prev');
    //this.router.navigateByUrl('recomendations',{ skipLocationChange: true });
    this.router.navigateByUrl('primaryContent',{ skipLocationChange: true });
  }
  goBack(): void {
    this.appState.set('direction','prev');
    this.router.navigateByUrl('upload-photo',{ skipLocationChange: true });
  }
  goHome(): void {
    this.appState.set('direction','prev');
    this.router.navigateByUrl('/',{ skipLocationChange: true });
  }
  continueWithoutPhoto(){
    this._moldService.removePhoto();
    this.router.navigateByUrl('upload-photo',{ skipLocationChange: true });
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
