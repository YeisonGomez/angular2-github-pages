import { Component, OnInit } from '@angular/core';
import { icons } from '../constants/icons';

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
				{ name: "HTML", lvl: 600 },
				{ name: "CSS", lvl: 100 },
				{ name: "Javascript", lvl: 650},
				{ name: icons.angular1.title, lvl: 650, link: icons.angular1.link },
				{ name: icons.angular2.title, lvl: 550, link: icons.angular2.link }
			]},
			{ platform: "Backend", skills: [
				{ name: icons.nodejs.title, lvl: 620, link: icons.nodejs.link },
				{ name: icons.asmx.title, lvl: 500, link: icons.asmx.link },
				{ name: icons.flask.title, lvl: 400, link: icons.flask.link }
			]},
			{ platform: "Móvil", skills: [
				{ name: icons.ionic1.title, lvl: 630, link: icons.ionic1.link },
				{ name: icons.swift.title, lvl: 50, link: icons.swift.link }
			]}	
		];
	}

	ngOnInit() {
	}

}
