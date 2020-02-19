import {component } from '@angular/core';
import {MatDialog} from '@angular/material';

@component({
	selector: 'app-root',
	templateUrl: '.\app.component.html',
	styleUrls ['./app.component.css']

})
	export class AppComponent {
		title = 'app';

			constructor(public dialog: MatDialog) {

			}
	}
	openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      height: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
