import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from '../../../../app.service';
@Component({
  selector: 'tipp-portal-mobile-floor',  // <home></home>

  templateUrl: './template.html',

  styleUrls: ['../../sass/tipp.style.scss']
})
export class tippPortalMobileFloorComponent {
	constructor(private router:Router,private state:AppState){

  }
  goNext(){
    this.state.set('direction','next');
    this.router.navigateByUrl('/questions/1', { skipLocationChange: true });

  }
}
