import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

import { Http, Response } from '@angular/http';
import { Hero } from '../../components/hero';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

	constructor(private http: Http) { }

	public getAllHeroes(): Observable<Hero[]> {
		return this.http
			.get(API_URL + '/heroes')
			.pipe(map(response => {
				const heroes = response.json();
				return heroes.map((hero) => new Hero(hero));
			}), catchError(err => {
				return this.handleError(err);
			}));
	}

	public createHero(hero: Hero): Observable<Hero> {
		return this.http
			.post(API_URL + '/heroes', hero)
			.pipe(map(response => {
				return new Hero(response.json());
			}), catchError(err => {
				return this.handleError(err);
			}));
	}

	public getHeroById(heroId: number): Observable<Hero> {
		return this.http
			.get(API_URL + '/heroes/' + heroId)
			.pipe(map(response => {
				return new Hero(response.json());
			}), catchError(err => {
				return this.handleError(err);
			}));
	}

	public updateHero(hero: Hero): Observable<Hero> {
		console.log('in update : ' + hero.name);
		return this.http
			.put(API_URL + '/heroes/' + hero.id, hero)
			.pipe(map(response => {
				return new Hero(response.json());
			}), catchError(err => {
				return this.handleError(err);
			}));
	}

	public deleteHeroById(heroId: number): Observable<null> {
		return this.http
			.delete(API_URL + '/heroes/' + heroId)
			.pipe(map(response => {
				return null;
			}), catchError(err => {
				return this.handleError(err);
			}));
	}

	private handleError(error: Response | any) {
		console.error('ApiService::handleError', error);
		return Observable.throw(error);
	}
}
