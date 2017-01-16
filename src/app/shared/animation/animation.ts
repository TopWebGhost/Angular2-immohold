import { trigger, state, style, transition, animate } from '@angular/core';

export type Orientation = ( "prev" | "next" | "none" );
export const slideIn = trigger('routeAnimation', [
  // transition('void => prev', [
  //   style({transform: 'translateX(-100%)',opacity:1}),
  //   animate(1000,style({transform: 'translateX(0)',opacity:1}))
  // ]),
  // transition('prev => void', [
  //   style({transform: 'translateX(0)',opacity:1}),
  //   animate(1000, style({transform: 'translateX(100%)',opacity:1}))
  // ]),
  // transition('void => next', [
  //   style({transform: 'translateX(100%)',opacity:1}),
  //   animate("1000ms ease-in-out", style({transform: 'translateX(0)',opacity:1}))
  // ]),
  // transition('next => void', [
  //   style({transform: 'translateX(0)',opacity:1}),
  //   animate("1000ms ease-in-out", style({transform: 'translateX(-100%)',opacity:1}))
  // ])


]);

