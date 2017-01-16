import { Component } from '@angular/core';
import { AppState } from '../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'home-desktop',  // <home></home>

  templateUrl: './desktop.template.home.html',

  styleUrls: ['../scss/desktop.style.home.scss'],
})
export class homeDesktop  {
  private isMold:boolean;
  private isPest:boolean;
  private isFoodFloor:boolean;

  constructor(private router:Router,private state:AppState){


  }

ngOnInit() {
  this.isMold = (this.state.get('service') == 'mold');
  this.isPest = (this.state.get('service') == 'pest');
  this.isFoodFloor = (this.state.get('service') == 'floor');
  console.log('isMold='+this.isMold);
}

  goHome(){
    return false;
  }

  goNext(){
    this.state.set('direction','next');
    this.router.navigateByUrl('/questions/1',{ skipLocationChange: true });

  }
  goProductDetails(){
    this.state.set('direction','next');
    this.router.navigateByUrl('product-details', { skipLocationChange: true });
  }

}
