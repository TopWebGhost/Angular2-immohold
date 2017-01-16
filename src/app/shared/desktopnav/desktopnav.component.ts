import { Component } from '@angular/core';
import { AppState } from '../../app.service';
import{ EmitterService } from '../../questions/emitter'
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'nav-desktop',  // <home></home>

  templateUrl: './desktopnav.template.html',

  styleUrls: ['./desktopnav.style.scss']
})
export class desktopnavComponent {
  emitter = EmitterService.get("channel_1");
  backLink:string;
constructor(public appState: AppState,private router: Router, private _location:Location){
  this.emitter.subscribe(msg => {
    this.backLink = (msg.backLink);
  });

}
ngOnInit(){
}


  ngOnDestroy(){
    //this.direction = this.appState.get('direction');
  }
  goBack() {

    //console.log('backlink:'+this.backLink);

    //console.log(this.appState.state.state);
    this.appState.set('direction','prev');
    let state = this.appState.get('stack');
    //take of last element
    let prevLink = state.pop();
    if((prevLink=='/success')||(prevLink=='/failure')){
      state.pop();
      state.pop();
    }
    let link =state.pop();
    state.push(link);
    this.router.navigateByUrl(link,{ skipLocationChange: true });
    //this.router.navigateByUrl(this.appState.state,{ skipLocationChange: true });
  }
  toHome(){
    this.appState.set('direction','prev');
    this.router.navigateByUrl('/',{ skipLocationChange: true });
  }

}

