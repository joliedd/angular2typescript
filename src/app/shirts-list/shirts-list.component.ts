import { Component, OnInit } from '@angular/core';
import { ShirtService } from '../model/shirt.service';
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
      this.shirtService.getShirts(this.dataUrl).subscribe(
            data => this.shirts = data
        );
    }

    ngOnInit() {
        this.shirtService.getShirts(this.dataUrl).subscribe(
            data => this.testResponse = data
        );
        console.log("Shirts from server: ", this.testResponse);
        this.shirts = this.testResponse;
    }
    
}
