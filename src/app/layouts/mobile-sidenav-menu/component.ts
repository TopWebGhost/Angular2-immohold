import { Component } from '@angular/core';
import { Router } from '@angular/router';
import{ EmitterService } from '../../questions/emitter'
import { AppState } from '../../app.service';


@Component({
  selector: 'mobile-sidenav-menu',

  templateUrl: './template.html',

  styleUrls: ['./style.scss'],

})


export class mobileSidenavMenuComponent {

  constructor( private router: Router,private state:AppState){

  }
  emitter = EmitterService.get("direction");

goTerms(){
    this.state.set('direction','next');
    this.router.navigateByUrl('terms',{ skipLocationChange: true });
  }

  goDisclaimer(){
    this.state.set('direction','next');
    this.router.navigateByUrl('disclaimer',{ skipLocationChange: true });
  }
  goContact() {
    this.state.set('direction', 'next');
    this.router.navigateByUrl('contacts', {skipLocationChange: true});
  }
  goAbout() {
    this.state.set('direction', 'next');
    this.router.navigateByUrl('about', {skipLocationChange: true});
  }
}
