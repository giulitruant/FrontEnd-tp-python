import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TestService } from './service/test.service';
import { DialogComponent } from './dialog/dialog.component';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end';
  private loading: boolean = false;  
  private results : any;

  constructor(private itunes:TestService,
    public dialog: MatDialog){ }

  doSearch(search: any){
    this.loading = true;
    this.itunes.search(search)
     .then(
         (res: any) => { // Success          
         this.results = res.results;
         this.loading = false
         //resolve();
         },
         msg => { // Error
          this.openDialog(msg);
         }
       ).catch(err => {
         this.openDialog("Error de servicio");
       });
  }

  openDialog(result: any): void{
    const dialogRef = this.dialog.open(AppComponent, {
      data: {result: result}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El dialogo se cerro');      
    });
  }

}
