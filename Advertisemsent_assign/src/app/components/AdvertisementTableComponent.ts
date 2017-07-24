import {Component} from '@angular/core';

@Component({
    selector:'advertiseTable',
    templateUrl:'./table.html',

    inputs:['newAdList']
})

export class DisplayAd{

    public newAdList:Array<any>;

    deleteAd(obj:any){
        let index=this.newAdList.indexOf(obj,0);
        this.newAdList.splice(index,1);
    }
}