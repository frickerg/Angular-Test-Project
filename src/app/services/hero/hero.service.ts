import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from '../../components/hero';
import { MessageService } from '../message/message.service';

// run json server : https://github.com/typicode/json-server
const API_URL = environment.apiUrl;
const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
	providedIn: 'root',
})
export class HeroService {
	constructor(
		private http: HttpClient,
		private messageService: MessageService
	) { }

	getHeroes(): Observable<Hero[]> {
		return this.http.get<Hero[]>(API_URL)
			.pipe(
				tap(heroes => this.log('fetched heroes')),
				catchError(this.handleError('getHeroes', []))
			);
	}

	getHero(id: number): Observable<Hero> {
		const url = `${API_URL}/${id}`;
		return this.http.get<Hero>(url).pipe(
			tap(_ => this.log(`fetched hero id=${id}`)),
			catchError(this.handleError<Hero>(`getHero id=${id}`))
		);
	}

	addHero(hero: Hero): Observable<Hero> {
		return this.http.post<Hero>(API_URL, hero, httpOptions).pipe(
			tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
			catchError(this.handleError<Hero>('addHero'))
		);
	}

	updateHero(hero: Hero): Observable<any> {
		return this.http.put(API_URL, hero, httpOptions).pipe(
			tap(_ => this.log(`updated hero id=${hero.id}`)),
			catchError(this.handleError<any>('updateHero'))
		);
	}

	private log(message: string) {
		this.messageService.add(`HeroService: ${message}`);
	}

	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			console.error(error);
			this.log(`${operation} failed: ${error.message}`);

			// Let the app keep running by returning an empty result.
			return of(result as T);
		};
	}

}
