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
    
  constructor(private shirtService: ShirtService) {
    this.shirts = this.shirtService.getShirts();
  }


  ngOnInit() {
  }

}
