import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/common';
import { ContentComponent } from './../content/content.ContentComponent';
import { CadastroClientesComponent } from './../cadastro-clientes/cadastro-clientes.component';

const routes : Routes = [ 
 { path: '', component : ContentComponent }
 { path : 'cadastro-clientes', component: CadastroClientesComponent },

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