import { Component, OnInit } from '@angular/core';
import { ShirtService } from '../service/shirt.service';
import { Shirt } from '../model/shirt';

@Component({
  selector: 'app-shirts-list',
  templateUrl: './shirts-list.component.html',
  styleUrls: ['./shirts-list.component.css'],
  providers: [ShirtService]
})
export class ShirtsListComponent implements OnInit {

	shirts: Shirt[];
  	private dataUrl = 'http://mock-shirt-backend.getsandbox.com/shirts';  // URL to web api
    testResponse: any;

    constructor(private shirtService: ShirtService) {
    	try {
 				this.shirtService.getShirts(this.dataUrl).subscribe(
           		data => this.shirts = data
       		 );


		}catch (e) {
			console.log(e.name);                 // "TypeError"
  			console.log(e instanceof TypeError); // true
  			console.log(e.message);              // wrong type
  			
		}
     
    }

    ngOnInit() {       
    }
    
}
