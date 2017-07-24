import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<advertisement (childEventForm)="addNewAd($event)"></advertisement>
  <br><br>
   <advertiseTable [newAdList]="adList"></advertiseTable>`,
})

export class AppComponent  {
  adList:Array<any>=[];

  public addNewAd(newAd:any){
     this.adList.push(newAd);
  }
}
