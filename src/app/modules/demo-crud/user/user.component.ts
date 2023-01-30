import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { User } from 'src/app/data/types/entity/user';
import { deleteuserRequest, getuserRequest } from 'src/app/store/userStore/user.actions';
import { selectUser } from 'src/app/store/userStore/user.selector';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  isVisible = false;
  user: User = {
    id: '',
    name: '',
    age: 0
  };
  constructor(private store: Store) { }
  listUser$ = this.store.pipe(
    select(selectUser) );

  ngOnInit(): void {
    this.store.dispatch(getuserRequest());
    console.log(this.listUser$,"du lieu");
  }
  showModal(): void {
    this.isVisible = true;
    this.user
  }

  deleteUser(id:any):void{
    this.store.dispatch(deleteuserRequest({ id: id }));
  }
  editUser(User:User){
    this.user=User
    console.log(User,"du lieu user");
    this.showModal();
  }



}
