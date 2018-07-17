import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { ApiService } from '../../services/api/api.service';

@Component({
	selector: 'app-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
	heroes: Hero[];

	constructor(private api: ApiService) { }

	ngOnInit() {
		this.getHeroes();
	}

	getHeroes(): void {
		this.api.getAllHeroes()
			.subscribe(heroes => this.heroes = heroes);
	}

	addHero(heroValue: string) {
		const nextIndex = this.heroes[this.heroes.length - 1].id + 1;
		this.api.createHero(new Hero({ id: nextIndex, name: heroValue }))
			.subscribe(hero => this.heroes.push(hero));
	}

}
