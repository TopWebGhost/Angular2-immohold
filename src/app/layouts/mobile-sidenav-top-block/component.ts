import { Component } from '@angular/core';
import { Router } from '@angular/router';
import{ EmitterService } from '../../questions/emitter'
import { AppState } from '../../app.service';


@Component({
  selector: 'mobile-sidenav-top-block',

  templateUrl: './template.html',

  styleUrls: ['./style.scss'],

})


export class mobileSidenavTopBlockComponent {

    constructor(public appState: AppState,public router: Router){

    }
  emitter = EmitterService.get("direction");

    goPortal(){
        this.appState.set('direction','next');
        this.router.navigateByUrl('portal',{ skipLocationChange: true });
    }
}
