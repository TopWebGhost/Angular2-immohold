import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from '../../app.service';
@Component({
  selector: 'ask-a-pro',  // <home></home>

  templateUrl: './ask-a-pro.template.html',

  styleUrls: ['./ask-a-pro.style.scss']
})
export class askaproComponent {
  constructor(public appstate: AppState, private router: Router){

  }

  goNext(){
    this.appstate.set('direction','next');
    this.router.navigateByUrl('product-details',{ skipLocationChange: true });

  }

}

