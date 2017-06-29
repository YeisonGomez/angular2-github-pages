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
			{ platform: "Web", util: true, skills: [
				{ name: "HTML", lvl: 650 },
				{ name: "CSS", lvl: 100 },
				{ name: "Javascript", lvl: 700},
				{ name: icons.angular1.title, lvl: 700, link: icons.angular1.link },
				{ name: icons.angular2.title, lvl: 600, link: icons.angular2.link }
			]},
			{ platform: "Backend", util: true, skills: [
				{ name: icons.nodejs.title, lvl: 620, link: icons.nodejs.link },
				{ name: icons.flask.title, lvl: 400, link: icons.flask.link }
			]},
			{ platform: "Móvil", util: true, skills: [
				{ name: icons.ionic1.title, lvl: 680, link: icons.ionic1.link },
				{ name: icons.ionic2.title, lvl: 630, link: icons.ionic2.link },
				{ name: icons.react_native.title, lvl: 600, link: icons.react_native.link },
				{ name: icons.android.title, lvl: 400, link: icons.android.link }
			]},
			{ platform: "Otros", util: false, skills: [
				{ name: icons.git.title, lvl: 630, link: icons.git.link },
				{ name: icons.npm.title, lvl: 650, link: icons.npm.link },
				{ name: icons.bootstrap.title, lvl: 400, link: icons.bootstrap.link },
				{ name: icons.gulp.title, lvl: 600, link: icons.gulp.link },
				{ name: icons.mysql.title, lvl: 650, link: icons.mysql.link },
				{ name: icons.firebase.title, lvl: 630, link: icons.firebase.link }
			]}	
		];
	}

	ngOnInit() {
	}

	changeStateView(i): void{
		this.skills[i].util = !this.skills[i].util;
	}

}
