import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from '../../components/hero';
import { HEROES } from '../../components/mock-heroes';
import { MessageService } from '../../services/message/message.service';

@Injectable({
	providedIn: 'root',
})
export class HeroService {

	constructor(private messageService: MessageService) { }

	getHeroes(): Observable<Hero[]> {
		// TODO: send the message _after_ fetching the heroes
		this.messageService.add('HeroService: fetched heroes');
		return of(HEROES);
	}
}
