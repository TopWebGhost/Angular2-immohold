//--------------------------------------------------------------------------------------------------
// Imports Section:
//--------------------------------------------------------------------------------------------------
import {Injectable} from '@angular/core';
import {window} from '@angular/platform-browser/src/facade/browser';

//--------------------------------------------------------------------------------------------------
// Service Class:
//--------------------------------------------------------------------------------------------------
@Injectable()
export class WindowService
{
  protected mobileWidth:number;
  //----------------------------------------------------------------------------------------------
  // Constructor Method Section:
  //----------------------------------------------------------------------------------------------
  constructor(){
    this.mobileWidth = 991;
  }
isMobile(){
  return this.nativeWindow.innerWidth<=this.mobileWidth;
}
isDevice():boolean{
  return (typeof this.nativeWindow.orientation !== 'undefined');

  //console.log(typeof this.nativeWindow.orientation);
  //return /iPhone|iPad|iPod|Android/i.test(this.nativeWindow.navigator.userAgent);

}
  //----------------------------------------------------------------------------------------------
  // Public Properties Section:
  //----------------------------------------------------------------------------------------------
  get nativeWindow() : Window
  {
    return window;
  }
}
