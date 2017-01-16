import { Component } from '@angular/core';
import { AppState } from '../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'footer-desktop',  // <home></home>

  templateUrl: './footerdesktop.template.html',

  styleUrls: ['./footerdesktop.style.scss']
})
export class footerdesktopComponent {
  constructor(private router:Router,private appState:AppState){

  }



goTerms(){
  this.appState.set('direction','next');
  this.router.navigateByUrl('terms',{ skipLocationChange: true });
}

  goDisclaimer(){
    this.appState.set('direction','next');
    this.router.navigateByUrl('disclaimer',{ skipLocationChange: true });
  }
  goContact(){
    this.appState.set('direction','next');
    this.router.navigateByUrl('contacts',{ skipLocationChange: true });

  }


}

