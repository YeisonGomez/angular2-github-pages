import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

	projects: any[];

	constructor() { 
		this.projects = [
			{ 
				icon: "http://chaira.udla.edu.co/Api/Resources/imgs/LogoUA.svg",
				name: "Api de Chairá",
				description: "Servicios web que permiten el acceso seguro a datos de usuarios de la Universidad de la Amazonia, por medio del protocolo estandar OAuth2.",
				site: "http://chaira.udla.edu.co/api_dev/documentation#bienvenido"
			},
			{ 
				icon: "http://chaira.udla.edu.co/Api/Resources/imgs/LogoUA.svg",
				name: "Chairá para desarrolladores",
				description: "Plataforma para la administración de aplicaciones o sitios web, que hagan uso de la Api de Chairá.",
				site: "http://chaira.udla.edu.co/api_dev/"
			},
			{ 
				icon: "https://firebasestorage.googleapis.com/v0/b/prego-22e63.appspot.com/o/icon.png?alt=media&token=42bb81e5-75be-4dcf-8a72-72dbd801fa85",
				name: "Prego",
				description: "Aplicación móvil para la automatización de grupos académicos y comunicación entre docentes y estudiantes de la Universidad de la Amazonia.",
				site: "https://play.google.com/store/apps/details?id=com.ionic.prego146994"
			},
			{ 
				icon: "http://chaira.udla.edu.co/Api/Resources/imgs/LogoUA.svg",
				name: "UniAmazonia",
				description: "Aplicación móvil para informar a la comunidad de la Universidad de la Amazonia de noticias y eventos relevantes, con su respectivo administrador web.",
				site: "https://play.google.com/store/apps/details?id=com.ionicframework.udla&hl=es_419"
			}
		];
	}

	ngOnInit() {
	}

}
