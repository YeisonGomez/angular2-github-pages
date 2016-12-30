import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

	skills: any[];

	constructor() { 
		this.skills = [
			{ platform: "Web", skills: [
				{ name: "HTML/CSS", lvl: 400 },
				{ name: "Javascript", lvl: 650},
				{ name: "AngularJS 1", lvl: 650, link: "https://angularjs.org/" },
				{ name: "AngularJS 2", lvl: 550, link: "https://angular.io/docs/ts/latest/quickstart.html" }
			]},
			{ platform: "Backend", skills: [
				{ name: "NodeJS", lvl: 550, link: "https://nodejs.org/es/" },
				{ name: ".NET/Asmx", lvl: 500, link: "https://msdn.microsoft.com/en-us/library/ms972326.aspx" },
				{ name: "Python/Flask", lvl: 400, link: "https://www.fullstackpython.com/flask.html" }
			]},
			{ platform: "Móvil", skills: [
				{ name: "Ionic 1", lvl: 630, link: "http://ionicframework.com/docs/overview/" },
				{ name: "Swift", lvl: 80, link: "http://www.apple.com/co/swift/" }
			]}	
		];
	}

	ngOnInit() {
	}

}
