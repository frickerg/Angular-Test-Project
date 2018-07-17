import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { ApiService } from '../../services/api/api.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	heroes: Hero[] = [];

	constructor(private api: ApiService) { }

	ngOnInit() {
		this.getHeroes();
		console.log(this.heroes);
	}

	getHeroes(): void {
		this.api.getAllHeroes()
			.subscribe(heroes => this.heroes = heroes.slice(1, 5));
	}
}
