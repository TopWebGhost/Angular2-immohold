import { Component } from '@angular/core';
import { AppState } from '../../app.service';
import { Router } from '@angular/router';
@Component({
  selector: 'details-desktop',  // <success-desktop></success-desktop>

  templateUrl: 'desktop.template.details.html',

  styleUrls: ['../scss/desktop.style.details.scss']
})

export class detailsDesktop {

  constructor(private router:Router,private state:AppState){

  }


  goNext(){
    this.state.set('direction','next');
    this.router.navigateByUrl('upload-photo', { skipLocationChange: true });

  }
}
