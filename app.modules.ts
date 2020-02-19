import { browseModule } from '@angular/plataform-browser';
import {NgModule } from '@angular/core';

import { appcomponent} from './app.component';
import { browserAnimationsModule} from '@angular/plataform-browser/animations';
import {MatDialogModule} from ‘@angular/material/dialog’;

// components recem criados //  

import {HeaderComponent} from './header/header.components';
import {ContentComponent} from './content/content.component';
import { FooterComponent} from './footer/footer.component';
 

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
		],
	providers: [],
	bootsrap: [appComponent]
})
	export class AppModule { }