import { Component } from '@angular/core';
import { AppState } from '../../../app.service';
import { Router } from '@angular/router';
@Component({
  selector: 'tipp-base',  // <home></home>

  templateUrl: './tipp-base.template.html',

  styleUrls: ['../sass/tipp.style.scss']
})
export class tippbaseComponent {

  constructor(public appState: AppState,private router: Router){

  }



  goProductDetails(){
    this.appState.set('direction','next');
    this.router.navigateByUrl('product-details',{ skipLocationChange: true });
  }

}

