import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { SampleComponent } from './components/sample/sample.component';
import { DirectiveTestComponent } from './components/directives-test/directive-test.component';
import { PipesTestComponent } from './components/pipes-test/pipes-test.component';
import { ChildComponent } from './components/child-component/child.component';
import { Child2Component } from './components/child-2-component/child2.component';
import { EventPipe } from './components/pipes-test/even.pipe';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { MdfFormComponent } from './components/mdf-form/mdf-form.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { FirstComponent } from './components/routes/first.component';
import { SecondComponent } from './components/routes/second.component';
import { ThirdComponent } from './components/routes/third.component';
import { FourthComponent } from './components/routes/fourth.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpModule,
                  RouterModule.forRoot([
                    {path: 'first', component: FirstComponent},
                    {path: 'second', component: SecondComponent},
                    {path: 'third', component: ThirdComponent},
                    {path: 'fourth/:message', component: FourthComponent}
                  ]) ],
  declarations: [ AppComponent, SampleComponent, DirectiveTestComponent, PipesTestComponent, ChildComponent, Child2Component, EventPipe,
                  TemplateDrivenFormComponent, MdfFormComponent, FormBuilderComponent, FirstComponent, SecondComponent, ThirdComponent, FourthComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
