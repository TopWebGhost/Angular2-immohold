import { Component } from '@angular/core';
import { Router } from '@angular/router';
import{ EmitterService } from '../../questions/emitter'
import { AppState } from '../../app.service';
@Component({
  selector: 'home-mobile',  // <home></home>

  templateUrl: './mobile.template.home.html',

  styleUrls: ['../scss/mobile.style.home.scss']
})
export class homeMobile {
  private isMold:boolean;
  private isPest:boolean;
  private isFoodFloor:boolean;

  constructor( private router: Router,private state:AppState){

  }
  ngOnInit(){
    this.isMold = (this.state.get('service') == 'mold');
    this.isPest = (this.state.get('service') == 'pest');
    this. isFoodFloor = (this.state.get('service') == 'floor');
  }

  emitter = EmitterService.get("direction");

  goRecomendations(){
    this.state.set('direction','next');
    //this.router.navigateByUrl('recomendations',{ skipLocationChange: true });
    this.router.navigateByUrl('primaryContent',{ skipLocationChange: true });
  }

  goBack(): void {
    window.history.back();

  }
  goHome(){
    return false;
  }

  goNext(){
    this.state.set('direction','next');

    this.router.navigateByUrl('/questions/1', { skipLocationChange: true });
  }
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
