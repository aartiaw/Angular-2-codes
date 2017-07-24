import {Pipe,PipeTransform} from '@angular/core';

@Pipe({name:'search'})

export class SearchAd implements PipeTransform{
    transform(allAds:Array<any>,searchBy:string):Array<any>{
        let filteredAds:Array<any>=[];
        let input = searchBy;

        if(input.length>2){
            for(let adFound of allAds){
                if(adFound.title.toLowercase().match(input) || adFound.name.toLowercase().match(input)){
                    filteredAds.push(adFound);
               }
            }
            return filteredAds;
        }
        else
            return allAds;

    }
}