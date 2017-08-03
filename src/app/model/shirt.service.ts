import { Injectable } from '@angular/core';

let shirts = [
	{
    id: 0,
    price: 88,
    picture: "https://unsplash.it/128/128",
    colour: "brown",
    size: "m",
    name: "Southview Clarke",
    quantity: 0
  },
  {
    id: 1,
    price: 63,
    picture: "https://unsplash.it/128/128",
    colour: "brown",
    size: "m",
    name: "Barronett Higgins"
  },
];

    
@Injectable()
export class ShirtService {
 
	private shirts;   
    
	constructor() {
    	this.shirts = shirts;
	}
 
	getShirts() {
    	return this.shirts;
	}    
 }