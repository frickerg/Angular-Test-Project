import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule, MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { MessagesComponent } from './components/messages/messages.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
	declarations: [
		AppComponent,
		HeroesComponent,
		HeroDetailComponent,
		MessagesComponent,
		DashboardComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		BrowserAnimationsModule,
		MatMenuModule,
		MatButtonModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
