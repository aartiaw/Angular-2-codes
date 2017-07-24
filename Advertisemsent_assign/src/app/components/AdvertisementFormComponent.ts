import {Component,EventEmitter} from '@angular/core';

@Component({
    selector:'advertisement',
    templateUrl:'./advertisement.html',

    outputs: ['childEventForm'] 
})

export class MyAd{

  //adObjects:Array<MyAd>=[];

  title:string;
  name:string = 'Aarti';
  category:string[] = ['Furniture','Hardware','Mobile'];
  description:string;
  mycat:string;

public childEventForm = new EventEmitter<any>();
  getDetails(title:string,name:string,description:string,cat:string):void{

    let newAd = {
      title:title,
      name:name,
      description:description,
      mycat:cat
    }
    
   this.childEventForm.emit(newAd);   
   
   
   /* this.title = title;   //without array of objects
    this.name = name;
    this.description = description;
    this.mycat = cat;*/

   /* var objects = new MyAd();   //for array of objects
    objects.title = title;
    objects.name = name;
    objects.description = description;
    objects.mycat = cat;

    this.adObjects.push(objects); */
  }
}