// aqui estamos importando o component do pacote angular core //

import { component, OnInit } from '@angular/core';
import * as Typed from 'typed.js';

// aqui decoramos a classe do component App Header //

@Component ({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']

})

// aqui exportamos a classe HeaderComponent //

export class HeaderComponent implements OnInit {
	// aqui definimos o contrustor da aplicacao //

	construtor(){}

	ngOnInit(){ 
		console.log('Component app-header iniciado...');
	}
	ngOnInit(){
		const options = {
	stringsElement: '#typed-strings',
	strings: ['Training banking juros amigo', 'Peça a portabilidade e venha ser Training Bankinhg hoje mesmo', 'Inovavor digital e seguro'],
	typeSpeed: 100,
	backSpeed: 100,
	backDelay: 200,
	smartBackspace: true,
	fadeOut: true,
	showCursor: false,
	startDelay: 1000,
	loop: true
};

	}
}