import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ApiService } from '../../services/api/api.service';

@Component({
	selector: 'app-hero-detail',
	templateUrl: './hero-detail.component.html',
	styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
	hero: Hero;

	constructor(
		private route: ActivatedRoute,
		private api: ApiService,
		private location: Location
	) { }

	ngOnInit(): void {
		this.getHero();
	}

	getHero(): void {
		const id = +this.route.snapshot.paramMap.get('id');
		this.api.getHeroById(id)
			.subscribe(hero => this.hero = hero);
	}

	updateHero(): void {
		this.api.updateHero(this.hero)
			.subscribe(hero => this.hero = hero);
		this.location.back();
	}

	deleteHero(): void {
		this.api.deleteHeroById(this.hero.id)
			.subscribe(hero => this.hero = hero);
		this.location.back();
	}

}
