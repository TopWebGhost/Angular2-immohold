import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from '../../../app.service';
@Component({
  selector: 'tipp-recomend',  // <home></home>

  templateUrl: './tipp-recomend.template.html',

  styleUrls: ['../sass/tipp.style.scss']
})
export class tipprecomendComponent {
  constructor(public appState: AppState,public router: Router){

  }
  goNext(){
    this.appState.set('direction','prev');
    this.router.navigateByUrl('product-details',{ skipLocationChange: true });
  }

}

