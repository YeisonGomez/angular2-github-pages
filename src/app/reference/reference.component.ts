import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.css']
})
export class ReferenceComponent implements OnInit {

	references: any[];

	constructor() { 
		this.references = [
			{ 	
				name: "Universidad de la Amazonia",
				logo: "http://chaira.udla.edu.co/Api/Resources/imgs/LogoUA.svg",
				description: "La Universidad de la Amazonia se encuentra ubicada la ciudad colombiana de Florencia, capital del departamento del Caquetá.",
				rol: "Desarrollador Full Stack",
				site: "http://www.udla.edu.co/v10/"
			}
		];
	}

	ngOnInit() {
	}
}
