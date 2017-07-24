import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './components/child-component/child.component';
import { Child2Component } from './components/child-2-component/child2.component';
@Component({
  selector: 'my-app',
  template: `<h1>App component</h1>
  <br>
  <h2>
  <nav>
		<a routerLink="/first" routerLinkActive="active" >First</a>
		<a routerLink="/second" routerLinkActive="active" >Second</a>
		<a routerLink="/third" routerLinkActive="active" >Third</a>
		<a routerLink="/fourth" routerLinkActive="active" >Fourth</a>
</nav></h2>
<router-outlet></router-outlet>
`

})
export class AppComponent  {
   name = 'Angular'; 
}
