import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';  
   
@Injectable()
export class ShirtService {
 
	constructor(private _http:Http) {}

    getShirts(url:string) {
        return this._http.get(url)
            .map(data => {
                data.json();
                console.log("Data from web-service: ", data.json());
                return data.json();
        });
    }   
    
 }