import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { switchMap } from 'rxjs';
import { User } from 'src/app/data/types/entity/user';
import { Appstate } from 'src/app/store/appState';
import { adduserRequest, updateUserRequest } from 'src/app/store/userStore/user.actions';
import { selectUserById } from 'src/app/store/userStore/user.selector';
@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.component.html',
  styleUrls: ['./modal-user.component.scss']
})
export class ModalUserComponent implements OnInit, OnChanges {

  @Input() isVisible = false;
  @Input() User={
    id:'',
    name:'',
    age:0
  };
   @Output() isVisibleChange=new EventEmitter<any>();


   user:User = {
    id: '',
    name: '',
    age: 0
  };
  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private appStore: Store<Appstate>,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  ngOnChanges():void{
    // let fetchData$ = this.route.paramMap.pipe(
    //   switchMap(() => {
    //     var id = this.User.id
    //     return this.store.pipe(select(selectUserById(id)));
    //   })
    // );
    // fetchData$.subscribe((data) => {
    //   if (data) {
    //     console.log(data,"dataaa");
    //     this.user = { ...data };
    //   }})
    // console.log(this.User,"ủe");

    this.user=this.User
  }

   handleCancel(){
    this.isVisible = false;
    this.isVisibleChange.emit(this.isVisible);
   }
   handleOk(){
    if(this.User.id!=""){
      this.store.dispatch(updateUserRequest({ updateUser: {...this.user} }));
      this.isVisible = false;
      this.isVisibleChange.emit(this.isVisible);
    }
    else{
      console.log(this.user.name,"du lieu");
      console.log(this.user.age,"du lieu");
      this.store.dispatch(adduserRequest({ newUser: this.user }));
      this.isVisible = false;
      this.isVisibleChange.emit(this.isVisible);
    }

   }
}

