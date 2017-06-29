


import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';

console.log("Hello1");
@Component({
  selector: 'MyApp',
  template: `
    <h1>sample<h1>
  `
})

export class Appcomponent {

console("checking");

}

bootstrap(Appcomponent);