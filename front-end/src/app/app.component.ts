import { Component } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end';

  // descargarPDF() {
  //   debugger;
  //   const doc = new jsPDF();
  //   doc.text('Hello world!', 10, 10);
  //   doc.save('a4.pdf');
  // }

}
