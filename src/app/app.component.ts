import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  objectKeys = Object.keys;
  cryptos: any;

  constructor(private data: DataService) {

  }
  ngOnInit() {
  	this.data.getPrices()
  	.subscribe(res =>{
  	this.cryptos = res;
  	console.log(res);
  	});
  }
}
