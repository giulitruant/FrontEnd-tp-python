import { Injectable, ResolvedReflectiveFactory } from '@angular/core';
import { HttpClient} from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  apiRoot:string = 'https://itunes.apple.com/search';
  // results: any ;
  // loading:boolean;

  constructor(private http: HttpClient) {
    //this.results : any;
    // this.loading = false;
   }

   search(term: string){
     let promise = new Promise((resolve, reject) => {
       let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
       this.http.get(apiURL)
       .toPromise();
      //  .then(
      //    (res: any) => { // Success          
      //    this.results = res.results;
      //    resolve();
      //    },
      //    msg => { // Error
      //    reject(msg);
      //    }
      //  ).catch(err => {
      //    return throwError("Error de servicio");
      //  });
   });
     return promise;
   }
}
