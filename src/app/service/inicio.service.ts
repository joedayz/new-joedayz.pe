import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';



@Injectable()
export class InicioService {

  url = 'http://localhost:8999';



  constructor(private httpClient: HttpClient) {
  }


  consultarFotosInicio() {

    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient.get(`${this.url}/portada/fotos`,{headers: headers});
  }
}
