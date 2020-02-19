import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/common';
import { ContentComponent } from './../content/content.ContentComponent';

const routes : Routes = [ 
 { path: 'cadastro', component : ContentComponent }

 ];

@NgModule({ 
	imports: [ 
	CommonModule 
	RouterModule.forrRout(routes)
	],
	declarations: [],
	exports: [RouterModule]
	})
	export class AppRoutingModule {}