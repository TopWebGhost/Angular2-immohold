import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


export type InteralStateType = {
  [key: string]: any
};

@Injectable()
export class AppState {
  _state: InteralStateType = { };
  private url: string;
  private config: any;

  constructor(public http: Http) {

    this.http.request('/assets/data.json')
      .subscribe(res => {
        //console.log(res.json());
        this.config = res.json();
        console.log('121121');
      });
      //.subscribe(response => this.config = response.json());
      //.map(res => this.config = res.json());

  }






  getUrl(){
    return this.config.url;
    // http://immoheld-staging.squareball.de:8080/immoheld
  }


  // already return a clone of the current state
  get state() {
    return this._state = this._clone(this._state);
  }
  // never allow mutation
  set state(value) {
    throw new Error('do not mutate the `.state` directly');
  }


  get(prop?: any) {
    // use our state getter for the clone
    const state = this.state;
    return state.hasOwnProperty(prop) ? state[prop] : state;
  }

  set(prop: string, value: any) {
    // internally mutate our state
    return this._state[prop] = value;
  }


  private _clone(object: InteralStateType) {
    // simple object clone
    return JSON.parse(JSON.stringify( object ));
  }
}
