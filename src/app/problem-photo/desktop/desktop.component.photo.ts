import { Component } from '@angular/core';
import { AppState } from '../../app.service';
import { Router } from '@angular/router';
import { moldService } from "../../shared/data/mold.service";
import { Photo } from "../../shared/data/image.class";

@Component({
  selector: 'photo-desktop',  // <success-desktop></success-desktop>

  templateUrl: 'desktop.template.photo.html',

  styleUrls: ['../scss/desktop.style.photo.scss']
})
export class photoDesktop {
  public image:Photo;
  constructor(public appState: AppState, public router: Router,public _moldService:moldService){

  }

  ngOnInit(){
    this.image = this._moldService.moldData.photo;
  }

  continueWithoutPhoto(){
    this._moldService.removePhoto();
    let state = this.appState.get('stack');
    //take of last element
    state.pop();

    this.appState.set('direction','prev');
    this.router.navigateByUrl('upload-photo',{ skipLocationChange: true });
  }

  goNext(){
    this.appState.set('direction','next');
    this.router.navigateByUrl('callback-info',{ skipLocationChange: true });
  }

}
