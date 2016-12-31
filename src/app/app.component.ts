import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	tabs : any[];

	constructor(){
		this.tabs = [
			{ name: "Skills", link: "/skills" }, 
			{ name: "Proyectos", link: "/projects" }, 
			{ name: "Referencias", link: "/references" }
		];
	}
}
