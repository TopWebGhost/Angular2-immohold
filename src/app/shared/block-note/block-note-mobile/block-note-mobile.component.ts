import { Component } from '@angular/core';
import { AppState } from '../../../app.service';
import { Router } from '@angular/router';
@Component({
  selector: 'block-note-mobile',  // <home></home>

  templateUrl: './block-note-mobile.template.html',

  styleUrls: ['../sass/block-note.style.scss']
})
export class blocknotemobileComponent {
  constructor(public appState: AppState,public router: Router){

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

}

