import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient) { }
  login(payload: any) {
    console.log(payload,"payload");
    
    return this.http.post<any>('http://localhost:3001/login', payload);
  }
}
