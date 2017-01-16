import { Component } from '@angular/core';
import { AppState } from '../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'top-menu-desktop',  // <home></home>

  templateUrl: './topmenudesktop.template.html',

  styleUrls: ['./topmenudesktop.style.scss']
})
export class topmenudesktopComponent {

  constructor(public appState: AppState,public router: Router){

  }

  goHome(){
    this.appState.set('direction','prev');
    this.router.navigateByUrl('/',{ skipLocationChange: true });
  }
}

