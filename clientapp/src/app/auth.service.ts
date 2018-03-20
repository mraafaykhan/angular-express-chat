import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: String, password: String): Observable<any>{
    return this.http.post('http://localhost:3000/user/login', {
      email: email,
      password: password
    });
  }
  register(email: String, password: String): Observable<any>{
    return this.http.post('todo add URL', {
      email: email,
      password: password
    });
  }
}
