import { browserModule } from '@angular/plataform-browser';
import {NgModule, CUSTOM_ELEMENT_SCHEMA} from '@angular/core';


import { appcomponent} from './app.component';
import { browserAnimationsModule} from '@angular/plataform-browser/animations';
import {MatDialogModule} from ‘@angular/material/dialog’;

// components recem criados //  

import {MatDialogModule} from '@angular/plataform-browser/animations';
import {HeaderComponent} from './header/header.components';
import {ContentComponent} from './content/content.component';
import { FooterComponent} from './footer/footer.component';
import {AppRoutingModule} from './app-routing/app-routing.module';


@NgModule({
		declarations: [
		AppComponent,
//declaracao dos components recem-criados//
	HeaderComponent,
	ContentComponent,
	FooterComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MatDialogModule
		AppRoutingModule
		],
	providers: [],
	bootsrap: [appComponent],
	schemas: [CUSTOM_ELEMENT_SCHEMA]
})
	export class AppModule { }