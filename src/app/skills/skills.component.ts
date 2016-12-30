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
				{ name: "Javascript", lvl: 650 },
				{ name: "AngularJS 1", lvl: 650 },
				{ name: "AngularJS 2", lvl: 450 }
			]},
			{ platform: "Backend", skills: [
				{ name: "NodeJS", lvl: 550 },
				{ name: ".NET/Asmx", lvl: 500 },
				{ name: "Python/Flask", lvl: 350 }
			]},
			{ platform: "Móvil", skills: [
				{ name: "Ionic 1", lvl: 630 }
			]}	
		];
	}

	ngOnInit() {
	}

}
