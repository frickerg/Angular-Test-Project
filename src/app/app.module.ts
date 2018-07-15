import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		AppComponent,
		HeroesComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		BrowserAnimationsModule,
		MatToolbarModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
