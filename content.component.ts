import { component, OnInit } from '@angular/core';
import * as Typed from 'typed.js';
import { Router } from '@angular/router';

@Component ({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']

})

export class HeaderComponent implements OnInit {

	construtor(private router: Router){}

	ngOnInit(){
	}

	gotoCadastroClientes(){
		this.router.navigate(['cadastro-clientes'])
		}

	}
