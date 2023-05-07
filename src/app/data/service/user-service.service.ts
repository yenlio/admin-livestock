import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../types/entity/user';
import { forkJoin } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) {}
  get() {
    return this.http.get<User[]>('http://localhost:3001/demo');
  }

  create(payload: User) {
    return this.http.post<User>('http://localhost:3001/demo', payload);
  }
  delete(id: number) {
    console.log(id,"id for delete");

    return this.http.delete(`http://localhost:3001/demo/${id}`);
  }
  update(payload: User) {
    return this.http.put<User>(
      `http://localhost:3001/demo/${payload.id}`,
      payload
    );
    }

    getlistLib(){

      const listLibs= this.http.get<User[]>('http://localhost:3001/listLib');
      const app1= this.http.get<User[]>(' http://localhost:3001/Develop-application');
      const app2= this.http.get<User[]>('http://localhost:3001/Testing-application');
      return forkJoin([listLibs,app1,app2])
    }
}
