import { Component } from '@angular/core';
import { AppState } from '../../../app.service';
import { Router } from '@angular/router';
@Component({

  selector: 'tag-line-base',  // <home></home>

  templateUrl: './tag-line-base.template.html',

  styleUrls: ['../sass/tag-line.style.scss']
})
export class taglinebaseComponent {
  constructor(public appState: AppState,public router: Router) {

  }

  goArticle(){
    this.appState.set('direction','next');
    this.router.navigateByUrl('content-article',{ skipLocationChange: true });
  }
}

